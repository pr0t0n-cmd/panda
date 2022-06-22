<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { JsonLd } from 'svelte-meta-tags';
	import { articles } from '$lib/data/articles.json';
</script>

<MetaTags
	title="Arbitrum Airdrop"
	titleTemplate="%s | The Coding Panda"
	description="1° Settimana - Scopriamo insieme come ottenere il primo NFT degli otto totali che potrebbero garantirti l'airdrop di Arbitrum"
	canonical="https://thecodingpanda.dev/"
	openGraph={{
		title: 'Arbitrum Airdrop',
		description:
			"1° Settimana - Scopriamo insieme come ottenere il primo NFT degli otto totali che potrebbero garantirti l'airdrop di Arbitrum",
		url: 'https://thecodingpanda.dev/blog/articles/airdrop/arbitrum-airdrop-week-1',
		type: 'article',
		article: {
			publishedTime: '2022-06-22T13:04:13Z',
			section: 'airdrop',
			authors: [
				'https://thecodingpanda.dev/authors/@andrea-casero',
				'https://thecodingpanda.dev/authors/@giorgio-bruzzi'
			],
			tags: ['airdrop']
		},
		images: [
			{
				url: 'https://thecodingpanda.dev/blog/airdrop/arbitrum-airdrop.png',
				width: 850,
				height: 650,
				alt: 'Arbitrum Airdrop'
			}
		]
	}}
/>

<JsonLd
	schema={{
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://thecodingpanda.dev/blog/articles/airdrop/arbitrum-airdrop-week-1'
		},
		headline: 'Arbitrum Airdrop',
		image: ['https://thecodingpanda.dev/blog/airdrop/arbitrum-airdrop.png'],
		datePublished: '2022-06-22T08:00:00+08:00',
		author: {
			'@type': 'Person',
			name: 'Andrea Casero'
		},
		publisher: {
			'@type': 'Organization',
			name: 'The Coding Panda',
			logo: {
				'@type': 'ImageObject',
				url: 'https://thecodingpanda.dev/loghi/panda.png'
			}
		}
	}}
/>

<section class="blog-style">
	<h3>Che cosa è Arbitrum</h3>
	<p>
		Arbitrum è un Layer due (L2) progettato per rendere le transazioni Ethereum molto veloci e molto
		economiche. Sebbene Arbitrum potrebbe avere ancora molta strada da fare prima che si evolva
		completamente, la soluzione di scaling vanta già circa $ 2 miliardi di valore bloccato (TVL) ed
		è diventato uno dei leader della scena dapp L2.
	</p>

	<div>
		<img src="/blog/airdrop/b-1.PNG" alt="TVL" />
		<p class="credit">Credit https://l2beat.com/</p>
	</div>

	<h3>Probabile Airdrop con il programma Arbitrum Odissey</h3>
	<p>
		Nel tentativo spingere la fase di crescita i creatori di Arbitrum hanno lanciato The Arbitrum
		Odyssey oggi 21 giugno 2022. Il programma durerà 8 settimane e vedrà le persone eseguire
		specifiche azioni sulle migliori dapp attualmente su Arbitrum. Coloro che completeranno tutte le
		azioni potranno ricevere fino a 17 NFT creati dagli artisti dei gatti tubby Ratwell e Sugoi.
		Quindi la partecipazione all'evento ci permetterà di:
	</p>
	<ul>
		<li>Supportare e conoscere una soluzione di scalabilità su Ethereum molto promettente</li>
		<li>Migliorare le nostre skilss a proposito di Layer 2</li>
		<li>Collezionare NFT da artisti famosi</li>
		<li>… e probabilmente ricevere un airdrop di token Arbitrum</li>
	</ul>
	<p>
		Su quest'ultimo punto, per ora è pura speculazione ma noi di The Coding Panda siamo certi che
		potrà influire in qualche modo su un successivo airdrop di Arbitrum.
	</p>

	<h3>Come ricevere il primo NFT di Arbitrum?</h3>
	<p>
		A partire dal 21 giugno alle 13:00 EST, utilizzando uno qualsiasi dei bridge/cex elencati di
		seguito per spostare ETH in Arbitrum, potrai richiedere il primo NFT alla fine della settimana.
		Gli utenti che utilizzeranno il bridge che avrà avuto il maggior numero di portafogli collegati
		ad Arbitrum ricevreannio un'ulteriore NFT bonus 👀.
	</p>

	<div>
		<img src="/blog/airdrop/b-2.PNG" alt="dapp-bridge-eth-arbitrum" />
		<p class="credit">Credit https://l2beat.com/</p>
	</div>

	<p>
		Se durante questa settima utilizzerai uno dei progetti sotto elencati per spostare ETH su
		Arbitrum sarai in grado di raccogliere la prima ricompensa NFT del programma Arbitrum - The
		Odyssey al termine della settimana.
	</p>

	<ul>
		<li><p><a href="https://across.to/" rel="">Across</a></p></li>
		<li><p><a href="https://banxa.com/" rel="">Banxa</a></p></li>
		<li><p><a href="https://bungee.exchange/" rel="">Bungee</a></p></li>
		<li>
			<p><a href="https://cbridge.celer.network/#/transfer" rel="">cBridge by Celer Network</a></p>
		</li>
		<li><p><a href="https://bridge.connext.network/" rel="">Connext</a></p></li>
		<li>
			<p>
				<a
					href="https://app.debridge.finance/?inputChain=1&amp;outputChain=56&amp;inputCurrency=&amp;outputCurrency="
					rel="">deBridge</a
				>
			</p>
		</li>
		<li><p><a href="https://bridge.degate.com/" rel="">DeGate</a></p></li>
		<li><p><a href="https://app.hashflow.com/" rel="">Hashflow</a></p></li>
		<li><p><a href="https://app.hop.exchange/" rel="">Hop Exchange</a></p></li>
		<li>
			<p><a href="https://mosaic.composable.finance/" rel="">Mosaic by Composable Finance</a></p>
		</li>
		<li><p><a href="https://www.mtpelerin.com/" rel="">Mt Pelerin</a></p></li>
		<li><p><a href="https://app.multichain.org/#/router" rel="">Multichain</a></p></li>
		<li><p><a href="https://oportal.boringdao.com/twoway" rel="">oPortal by BoringDAO</a></p></li>
		<li><p><a href="https://app.rango.exchange/" rel="">Rango Exchange</a></p></li>
		<li><p><a href="https://app.routerprotocol.com/swap" rel="">Router Protocol</a></p></li>
		<li><p><a href="https://app.rubic.exchange/" rel="">Rubic</a></p></li>
		<li>
			<p><a href="https://transferto.xyz/swap?fromChain=eth" rel="">transferto.xyz by LI.FI</a></p>
		</li>
		<li><p><a href="https://transak.com/" rel="">Transak</a></p></li>
		<li>
			<p>
				<a
					href="https://varenx.com/swap?inputCurrency=ETH&amp;outputCurrency=0x72377f31e30a405282b522d588AEbbea202b4f23&amp;chainId=1"
					rel="">VarenX</a
				>
			</p>
		</li>
	</ul>
	<p>
		Noi abbiamo provato diverse Dapp per eseguire il bridge da Ethereum ad Arbitrum e abbiamo
		trovato <bold><a href="https://bridge.degate.com/">DeGate</a></bold> la più favorevole dal punto
		di vista del costo di transazione, giusto qualche cent!
	</p>
</section>

<style>
	img {
		width: 100%;
	}

	.i-2 {
		background-image: url('/blog/blockchain-island/B-2.PNG');
	}
	.i-3 {
		background-image: url('/blog/blockchain-island/BV-1.gif');
	}
</style>
