const ref = {
    category: document.querySelectorAll('.item'),
}
console.log(`Number of categories: ${ref.category.length}`);

ref.category.forEach(item => {
    const title = item.firstElementChild.textContent;
    const subCategoryCount = item.lastElementChild.children.length;

    console.log(`Category: ${title}`)
    console.log(`Elements: ${subCategoryCount}`)
});