import axios from 'axios';

interface TagSimilarity {
    tag: string;
    score: number;
}

function jaccardSimilarity(inputString: string, textArray: string[]): string[] {
    const inputSet: any = new Set(inputString.split(/\s+/));

    const tagsWithScores = textArray.map(text => {
        const textSet: any = new Set(text.split(/\s+/));
        const intersection = new Set([...inputSet].filter((x: any) => textSet.has(x)));
        const union = new Set([...inputSet, ...textSet]);
        const score = intersection.size / union.size;

        return { score, tag: text };
    });

    // Sort the tags by score in descending order
    tagsWithScores.sort((a, b) => b.score - a.score);

    // Filter tags with scores higher than the average score
    const avgScore = tagsWithScores[0].score / 2;
    const selectedTags = tagsWithScores.filter((tag: TagSimilarity) => tag.score > avgScore);

    // Extract the tags from selectedTags
    const tags = selectedTags.map((tag: TagSimilarity) => tag.tag);

    // Remove duplicates from the tags array
    const uniqueTags = Array.from(new Set(tags));

    return uniqueTags;
}

// function levenshteinDistances(inputString: string, textArray: string[]): string[] {
//     const levenshteinDistances = textArray.map(text => {
//         const matrix: number[][] = Array.from({ length: inputString.length + 1 }, (_, i) => Array(text.length + 1).fill(i));
//         for (let i = 1; i <= inputString.length; i++) {
//             for (let j = 1; j <= text.length; j++) {
//                 const cost = inputString[i - 1] === text[j - 1] ? 0 : 1;
//                 matrix[i][j] = Math.min(
//                     matrix[i - 1][j] + 1,
//                     matrix[i][j - 1] + 1,
//                     matrix[i - 1][j - 1] + cost
//                 );
//             }
//         }

//         return { score: matrix[inputString.length][text.length], tag: text };
//     });

//     // Sort the tags by score in ascending order (lower distance is better)
//     levenshteinDistances.sort((a, b) => a.score - b.score);

//     // Extract the tags from levenshteinDistances
//     const tags = levenshteinDistances.map((tag: TagSimilarity) => tag.tag);

//     // Remove duplicates from the tags array
//     const uniqueTags = Array.from(new Set(tags));

//     return uniqueTags;
// }

function cosineSimilarities(inputString: string, textArray: string[]): string[] {
    const inputTokens = inputString.split(/\s+/);

    const tagsWithScores = textArray.map(text => {
        const textTokens = text.split(/\s+/);
        const commonWords = new Set([...inputTokens, ...textTokens]);
        const inputVec = Array.from(commonWords).map(word => inputTokens.includes(word) ? 1 : 0);
        const textVec = Array.from(commonWords).map(word => textTokens.includes(word) ? 1 : 0);
        const dotProduct = inputVec.reduce((acc, value, index): any => acc + value * textVec[index], 0);
        const mag1 = Math.sqrt(inputVec.reduce((acc, value): any => acc + value ** 2, 0));
        const mag2 = Math.sqrt(textVec.reduce((acc, value): any => acc + value ** 2, 0));
        const score = dotProduct / (mag1 * mag2);

        return { score, tag: text };
    });

    // Sort the tags by score in descending order
    tagsWithScores.sort((a, b) => b.score - a.score);

    // Filter tags with scores higher than the average score
    const avgScore = tagsWithScores[0].score / 2;
    const selectedTags = tagsWithScores.filter(tag => tag.score > avgScore);

    // Extract the tags from selectedTags
    const tags = selectedTags.map(tag => tag.tag);

    // Remove duplicates from the tags array
    const uniqueTags = Array.from(new Set(tags));

    return uniqueTags;
}

function generateCombinations(inputString: string): string[] {
    const words = inputString.split(' ');
    const combinations: string[] = [];

    for (let i = 0; i < words.length; i++) {
        let combination = '';
        for (let j = i; j < words.length; j++) {
            combination += (j > i ? ' ' : '') + words[j];
            combinations.push(combination);
        }
    }

    return Array.from(new Set(combinations));
}

export const getYoutubeTags = async (query: string) => {
    const queryArr = generateCombinations(query);

    const tagPromises = queryArr.map(async (e: string) => {
        try {
            const response = await axios.get(`https://suggestqueries.google.com/complete/search?q=${e}&client=firefox`);
            return response.data[1];
        } catch (error: any) {
            console.error(`Error fetching data for "${e}": ${error.message}`);
            return null;
        }
    });

    const results = await Promise.all(tagPromises);
    const validResults = results.filter((result) => result !== null).flat(1);

    const jaccardSimilarityTags = jaccardSimilarity(query, validResults);
    const cosineSimilaritiesTags = cosineSimilarities(query, validResults);
    // const levenshteinDistancesTags = levenshteinDistances(query, validResults);

    const allTags = Array.from(new Set([...jaccardSimilarityTags, ...cosineSimilaritiesTags]));

    return { data: allTags };
};
