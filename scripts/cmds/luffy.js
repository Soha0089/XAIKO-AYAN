module.exports = {
	config: {
		name: "luffy",
		aliases: ["luffy"],
		version: "1.0",
		author: "Team x7",
		countDown: 5,
		role: 0,
		shortDescription: "send you pic&video of luffy",
		longDescription: "",
		category: "anime",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 

"https://telegra.ph/file/623801e756d8cb6f79e93.jpg", 
"https://telegra.ph/file/026b2392dab3aa64adad6.jpg",
"https://telegra.ph/file/0bc97e2a0f801ee91af1b.jpg",
"https://telegra.ph/file/491bdd24323e5c1260703.jpg",
"https://telegra.ph/file/497ccda45c628c3a9f99f.jpg",
"https://telegra.ph/file/dbdc1f7a9ab687b7a8490.jpg",
"https://telegra.ph/file/924437ce8082e04546f44.jpg",
"https://telegra.ph/file/13473af00402bd83841c3.jpg",
"https://telegra.ph/file/6418d018d194094a46fc7.jpg",
"https://telegra.ph/file/f7ca13423f205f9e9b57f.jpg",
"https://telegra.ph/file/88bf2140b348525a31e94.jpg",
"https://telegra.ph/file/c8356d54cd0da44e76f47.jpg",
"https://telegra.ph/file/448158bbe8dc5a04cc37d.jpg",
"https://telegra.ph/file/c76db807b2fc749b2fe5f.jpg",
"https://telegra.ph/file/c84059c68797709de8919.jpg",
"https://telegra.ph/file/5cdd47eee512b27020518.jpg",
"https://telegra.ph/file/bda240bb802ee0dfa18f1.jpg",
"https://telegra.ph/file/0896629abd0f6e870133b.jpg",
"https://telegra.ph/file/14faf18828a78c296ff39.jpg",
"https://telegra.ph/file/9f28185e16e914822995b.jpg",
"https://telegra.ph/file/f4136b0ec57c9fe0f2950.jpg",
"https://telegra.ph/file/1def9365f1a83c78ebd20.jpg",
"https://telegra.ph/file/e24b495317a908b49647d.jpg",
"https://telegra.ph/file/563757293bcb2edb0cbe9.jpg",
"https://telegra.ph/file/99cee4edddfb11f0cee32.jpg",
"https://telegra.ph/file/630861d507efeaceff201.jpg",
"https://telegra.ph/file/b6e726c2f4520cb2a6253.jpg",
"https://telegra.ph/file/884de8edaa2cdea20d9b5.jpg",
"https://telegra.ph/file/747985183f270f4f3ea8b.jpg",
"https://telegra.ph/file/0929eaf72b1c3d5c91b59.jpg",
"https://telegra.ph/file/72ce06c60c0eaa82ca027.jpg",
"https://telegra.ph/file/91554148f2ecdde1b2238.jpg",
"https://telegra.ph/file/64ece10eb1eb76b78ed43.jpg",
"https://telegra.ph/file/68d6443dbf7e142e79233.jpg",
"https://telegra.ph/file/80e65e95df30747decf08.jpg",
"https://telegra.ph/file/cd24b70ac02ff870ccdf4.jpg",
"https://telegra.ph/file/4241e98bc777d90291d7b.jpg",
"https://telegra.ph/file/9c55e67c3012aed8aa88e.jpg",
"https://telegra.ph/file/00f7e2181ced73c69ef0f.jpg",
"https://telegra.ph/file/e9ba2bc68e19d72d2eb90.jpg",
"https://telegra.ph/file/3ef17b8cc536a7a966893.jpg",
"https://telegra.ph/file/9693219b9ca82a0f8a8dc.jpg",
"https://telegra.ph/file/7dc278337091dd01e095a.jpg",
"https://telegra.ph/file/2832bb890a4caff7d3624.jpg",
"https://telegra.ph/file/191916036619905125b5a.jpg",
"https://telegra.ph/file/a4099bf7687102ca2b92d.jpg",
"https://telegra.ph/file/c5e87527a1bf6c0ff39b2.jpg",
"https://telegra.ph/file/77eff636563e6ebd905bb.jpg",
"https://telegra.ph/file/f56161fd5c53962e9bf58.jpg",
"https://telegra.ph/file/6664285c578e08256af19.jpg",
"https://telegra.ph/file/adbc7b88cfd777c2dd112.jpg",
"https://telegra.ph/file/55cb4c986fa773976c031.jpg",
"https://telegra.ph/file/2d671862247198030f11f.jpg",
"https://telegra.ph/file/da4be64672fed6e23e2ee.jpg",
"https://telegra.ph/file/11d13f9fdc02a24e9b508.jpg",
"https://telegra.ph/file/27ea6f03faf62f744c32b.jpg",
"https://telegra.ph/file/87f49346ec43b2d28faa4.jpg",
"https://telegra.ph/file/7d374e1b229a14bb2ad9c.jpg",
     


		     
               
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: 'luffy',attachment: await global.utils.getStreamFromURL(img)
})
}
}
