
export function getPagination(currentPage = 1, totalItems=0, PAGE_LIMIT = 10) {
    const totalPageButtons = Math.ceil(totalItems/PAGE_LIMIT);
    const buttonBlocks = [];
    const BLOCK_LIMIT = 5;
    const totalButtonBlocks = Math.ceil(totalPageButtons/BLOCK_LIMIT);
    
    for (let i = 0; i < totalButtonBlocks; i++) {
      buttonBlocks[i] = [];
      for (let j = 1; j <= 5; j++) {
        if (BLOCK_LIMIT * i + j > totalPageButtons) break;
         buttonBlocks[i].push(BLOCK_LIMIT * i + j);
      }
    }

    const currentBlock = buttonBlocks.find((block) => block.includes(currentPage)) ?? [];

    return({currentBlock, buttonBlocks, totalPageButtons});
}