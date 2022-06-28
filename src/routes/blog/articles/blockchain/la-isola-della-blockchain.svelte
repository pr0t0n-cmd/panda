<!-- <script>
  import { MetaTags } from 'svelte-meta-tags';
   import { JsonLd } from 'svelte-meta-tags';
</script>

<MetaTags
  title="L'Isola della Blockchain"
  titleTemplate="%s | The Coding Panda"
  description="Un divertente esempio per conoscere come funziona questa tecnologia"
  canonical="https://thecodingpanda.dev/"
  openGraph={{
    title: "L'Isola della Blockchain",
    description: 'Un divertente esempio per conoscere come funziona questa tecnologia',
    url: 'https://thecodingpanda.dev/blog/articles/blockchain/la-isola-della-blockchain',
    type: 'article',
    article: {
      publishedTime: '2017-06-21T23:04:13Z',
      modifiedTime: '2018-01-21T18:04:43Z',
      expirationTime: '2022-12-21T22:04:11Z',
      section: 'blockchain',
      authors: [
        'https://thecodingpanda.dev/authors/@andrea-casero',
        'https://thecodingpanda.dev/authors/@giorgio-bruzzi'
      ],
      tags: ['blockchain']
    },
    images: [
      {
        url: 'https://thecodingpanda.dev/blog/blockchain-island/block-island.png',
        width: 850,
        height: 650,
        alt: "L'Isola della Blockchain"
      }
    ]
  }}
/>

<JsonLd
  schema={{
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://thecodingpanda.dev/blog/articles/blockchain/la-isola-della-blockchain'
    },
    headline: "L'Isola della Blockchain",
    image: [
      'https://thecodingpanda.dev/blog/blockchain-island/block-island.png'
    ],
    datePublished: '2022-02-05T08:00:00+08:00',
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
/> -->

<section class="blog-style">
	<p>
		La Blockchain è composta da una serie di blocchi che contentongo informazioni, organizzati in
		sequenza lineare e connessi uno dopo l'altro con un sistema crittografato. Riassunta così
		potrebbe non dire molto ma se spiegata attraverso esempi di vita reale potrebbe diventare un
		concetto molto semplice da capire.
	</p>

	<p>
		Immagina una piccola isola chiamata Blockchain Island. Gli abitanti di quest'isola hanno
		un'economia fiorente e scambiano i loro beni con la valuta digitale locale, "Lira Token. Il
		contabile dell'isola, ogni volta che avviene un pagamento, riporta la transazione nel registro
		dell'isola indicando il valore, chi ha eseguito la transazione e chi l'ha ricevuta.
	</p>

	<div class="img-bg i-1" />

	<p>
		Ogni giorno il registro con tutte le transazione della giornata viene pubblicato nella piazza
		principale dell'isola. Il resoconto della giornata viene sigillata al resoconto precedente
		attraverso uno stampo di cera. Per aumentare la sicurezza ed evitare la manomissione dei
		documenti viene aggiunto sullo stampo anche l'impronta digitale del sindaco dell'isola.
	</p>

	<div class="img-bg i-2" />

	<p>
		E questo è ciò che fa la Blockchain! In questa analogia una pagina rappresenta un blocco ed ogni
		blocco contiene una serie di transazioni. Il tutto organizzato da una sequenza lineare, blocco
		dopo blocco. Questo peremette ad ogni abitante della città di vedere tutte le transazione
		avvenute sull'isola andando indietro nel tempo fino alla prima pagina.
	</p>

	<p>Ok questa analogia può funzionare fino ad un certo punto per spiegare la blockchain..</p>

	<p>
		In uno scenario reale ogni città ha la sua copia di blockchain e tutte sono sincronizzate
		attraverso un meccanismo di consenso. Inoltre sull'isola sono presenti più contabili che
		registrano le transazioni cercando di aggiungere la loro pagina nel registro.
	</p>

	<p>
		Tieni a mente che tutti i contabili devono essere d'accordo sulla veridictà della pagina prima
		che questa venga aggiunta al registro ufficiale. Questo permette di evitare che il sistema sia
		compromesso da qualche contabile malintenzionato. Se la pagina viene approvata da tutti i
		contabili questa viene aggiunta su tutti i registri e a questo punto tutti i contabili iniziano
		a lavorare sulla pagina successiva.
	</p>

	<div class="img-bg i-3" />

	<p>
		Questo, in modo molto semplificato, è quello che fa la blockchain digitale al giorno d'oggi. I
		contabili nel nostro esempio sono tecnicamente i computer che fanno girarecil software della
		blockchain, anche chiamati NODI.
	</p>
	<p>
		I computer cercano di aggiungere una transazione da una pool centrale in un blocco. Un pool nel
		nostro esempio è un gruppo congiunto di contabili mentre nella realtà è un'insieme di "minatori"
		che mettono a disposizine le proprie risorse computazionali su una rete per rafforzare la
		probabilità di trovare un blocco. Il blocco è valido solo se il nodo vince una sorta di gioco di
		indovinelli casuale chiamato Proof Of Work (POW).
	</p>
</section>

<style>
	.i-1 {
		background-image: url('/blog/blockchain-island/b-1.PNG');
	}

	.i-2 {
		background-image: url('/blog/blockchain-island/B-2.PNG');
	}
	.i-3 {
		background-image: url('/blog/blockchain-island/BV-1.gif');
	}
</style>
