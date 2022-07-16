module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy({ './src/img': '.' });
  eleventyConfig.addPassthroughCopy({ './src/js': '.' });

  eleventyConfig.addShortcode("removecomma", function (tagstring) {
    return (tagstring.replaceAll(',', ' ')).replaceAll('  ', ' ').toUpperCase()
  });

  eleventyConfig.addShortcode("gettags", function (videodata) {
    let tags_str = '';
    for (let i = 0, l = videodata.length; i < l; i++) {
      tags_str += (videodata[i].tags);
      tags_str += ',';
    }

    var tags_array = [...new Set(tags_str.split(','))] //create array from comma, separated string
    tags_array = tags_array.map(str => str.trim()) //remove whitespace
    tags_array = tags_array.sort(); //sort
    tags_array = tags_array.map(function(x){ return x.toUpperCase(); }) //upper case
    tags_array = [...new Set(tags_array)]; //de-dupe

    let tags_html = '';

    tags_array.forEach(function (tag) {
      tags_html += '<button data-filter=".'
      tags_html += tag
      tags_html += '"class="button rounded p-1 bg-gray-300 font-medium text-xs leading-tight uppercase text-center">'
      tags_html += tag
      tags_html += '</button>'
    })
    return (tags_html)
  });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}