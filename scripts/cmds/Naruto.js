module.exports = {
	config: {
		name: "naruto",
		aliases: ["naruto"],
		version: "1.0",
		author: "Team x7",
		countDown: 5,
		role: 0,
		shortDescription: "send you pic&video of gojo",
		longDescription: "",
		category: "anime",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ "https://i.imgur.com/0yA9ZpW.mp4",

"https://telegra.ph/file/856a47d9e4bbc750ba00a.jpg",
"https://telegra.ph/file/6b2102cb85d94adcf1a1c.jpg",
"https://telegra.ph/file/aa18eeb09916dbed0f3b0.jpg",
"https://telegra.ph/file/b0783a836bc71c69c438d.jpg",
"https://telegra.ph/file/7e5bc048867ee5480f313.jpg",
"https://telegra.ph/file/2e1403fe95fe567d9ee45.jpg",
"https://telegra.ph/file/f1806484ce008003f3862.jpg",
"https://telegra.ph/file/29ccf008234cbfd626ccd.jpg",
"https://telegra.ph/file/5fc699d54d3f7a86cc9a7.jpg",


               
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: ' Satoru Gojo🦋 ',attachment: await global.utils.getStreamFromURL(img)
})
}
}
