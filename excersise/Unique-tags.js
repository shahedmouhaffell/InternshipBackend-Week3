function uniqueTag(articles) {
  const allTags = [].concat(...articles.map((article) => article.tags));

  const uniqueTags = [...new Set(allTags)];

  return uniqueTags.sort();
}
// console.log(
//   uniqueTag([
//     { tags: ["javascript", "react"] },
//     { tags: ["react", "css"] },
//     { tags: ["javascript", "node"] },
//   ]),
// );
module.exports = uniqueTag;
