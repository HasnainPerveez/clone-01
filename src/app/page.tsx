import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className=''>
              <div className='w-full flex justify-between items-center text-white'>
            <Image className='w-[180px] h-[98px]'
            src="/images/bayc-logo-z (1).jpg"
            alt="Logo"
            width={8000}
            height={3088}
            />
            <ul className='flex text-[10px] '>
                <li className='pl-[15px]'>
                    <a className='hover:text-[#bfc500]' href="">BUY AN APP</a>
                </li>
                <li className='pl-[15px]'>
                    <a className='hover:text-[#bfc500]' href="">ROAD MAP</a>
                </li>
                <li className='pl-[15px]'>
                    <a className='hover:text-[#bfc500]' href="">TEAM</a>
                </li>
                <li className='pl-[15px]'>
                    <a className='hover:text-[#bfc500]' href="">GALLERY</a>
                </li>
                <li className='pl-[15px]'>
                    <a className='hover:text-[#bfc500]' href="">PROVENANCE</a>
                </li>
                <li className='pl-[15px]'>
                    <a className='hover:text-[#bfc500]' href="">MEMBERS</a>
                </li>
            </ul>
        </div>
      <div>
        <Image className='w-full h-auto'
        src="/images/bayc-mutant-hero.jpg"
        alt="Hero"
        width={1600}
        height={1000}
        />
      </div>
      <div>
        <div className='flex flex-col sm:flex-row ml-[30px] mt-[30px] mr-[30px]'>
          <span>
            <p className=' justify-center items-center text-[30px] font-black font-sans block mt-4 mb-4 [unicode-bidi:isolate] sm: text-[30px] font-black font-sans block mt-4 mb-4 [unicode-bidi:isolate]'>
              WELCOME TO THE <br />
              BORED APE YACHT CLUB
            </p>
            <p className='text-base sm:text-base pr-0 sm:pr-[150px] text-justify font-thin font-montserrat'>
              BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.
            </p>
          </span>
          <span className='flex flex-row sm:flex-col w-[631px]'>
            <Image className='flex w-[170px] h-[170px]'
            src="/images/ap1.jpg"
            alt="ap1"
            width={631}
            height={631}
            />
              &#160;&#160;&#160;&#160;
            <Image className='flex w-[170px] h-[170px]'
            src="/images/ap2.jpg"
            alt="ap2"
            width={631}
            height={631}
            />
          </span>
          &#160;&#160;&#160;&#160;
          <span className='flex flex-row sm:flex-col w-[631px]'>
            <Image className='flex w-[170px] h-[170px]'
            src="/images/ap3.jpg"
            alt="ap3"
            width={631}
            height={631}
            />
              &#160;&#160;&#160;&#160;
            <Image className='flex  w-[170px] h-[170px]'
            src="/images/ap4.jpg"
            alt="ap4"
            width={631}
            height={631}
            />
          </span>
        </div>
        <p className='text-[#bfc500] ml-[30px] text-[25.6px] font-montserrat'>FAIR DISTRIBUTION</p>
        <p className='ml-[30px] font-[16.8px] font-montserrat'>(BONDING CURVES ARE A PONZI)</p>
        <div className=' sm:flex justify-between ml-[30px] mr-[30px]'>
          <p className='font-montserrat block mt-[30px] mb-[30px] [unicode-bidi:isolate]'>There are no bonding curves here. Buying a Bored Ape costs 0.08 ETH. There <br /> are no price tiers; BAYC membership costs the same for everyone.</p>
          <p className='font-montserrat text-[16px] font-[80] block mt-[30px] mb-[30px] [unicode-bidi:isolate]'>Note: Thirty apes are being withheld from the sale. <br /> These will be used for giveaways, puzzle rewards—and <br /> for the creators&apos; BAYC memberships</p>
        </div>
        <div className='flex items-center justify-around bg-[#bfc500] h-[125.6px] sm:h-[111.6px] p-[20.8px] ml-[30px] mr-[30px]'>
          <span className='basis-[200px] text-black font-black font-sans'>BUY AN APE</span>
          <p id='gr' className='text-xs sm:text-xs md:text-base font-normal basis-[350px] text-black block mt-[30px] mb-[30px] [unicode-bidi:isolate]'>The initial sale has sold out. To get your Bored Ape, check out the collection on OpenSea.</p>
          <button className='w-[240px] h-[75px] basis-[200px] text-[#bfc500] bg-black font-[600] text-center border-0 rounded-lg text-[16px] hover:bg-white hover:text-black'>BUY AN APE ON <br /> OPENSEA</button>
        </div>
        <hr id='hr' className='mt-[40px] ml-[30px] mr-[30px] block overflow-hidden border-b-slate-500 [unicode-bidi:isolate] [border-style:inset]'/>
        <div className='flex flex-col sm:flex-row m-[30px] justify-between'>
          <span className='basis-[650px] tracking-[3px] leading-[25px]'>
            <h1 className='block text-2xl mt-2 mb-2 font-bold '>THE SPECS</h1>
            <p>Each Bored Ape is unique and programmatically generated from over 170 possible traits, including expression, headwear, clothing, and more. All apes are dope, but some are rarer than others.</p>
            <p>The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. <a className='text-[#bfc500]' href=""> (See Record and Proof.)</a> Purchasing an ape costs 0.08 ETH.</p>
            <p>To access members-only areas such as <a className='text-[#bfc500]' href=""> THE BATHROOM </a> , Apeholders will need to be signed into their Metamask Wallet.</p>
          </span>
          <Image className='w-[340px] h-auto overflow-clip-margin-content-box'
          src="/images/mystery-ape.webp"
          alt="alt"
          width={554}
          height={554} />
        </div>
        <hr id='hr' className='mt-[40px] ml-[30px] mr-[30px] block overflow-hidden border-b-slate-500 [unicode-bidi:isolate] [border-style:inset]'/>
        <div className='flex flex-col m-[30px]'>
          <h1 className='block text-[2em] mt-[0.67em] mb-[0.67em] font-bold isolate'>
            <b>WELCOME TO THE CLUB</b>
          </h1>
          <p className='mr-0 sm:mr-[225px] tracking-[3px] leading[25px] block mt-4 mb-4 mx-0 isolate'>When you buy a Bored Ape, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a club whose benefits and offerings will increase over time. Your Bored Ape can serve as your digital identity, and open digital doors for you.</p>
        </div>
        <div className='flex flex-col sm:flex-row justify-between m-[60px]' >
       <span className='flex flex-col w-[150px]'>
        <Image className='w-[100px]'
        src="/images/icon1.jpg"
        alt="1sticon"
        width={122}
        height={182}
        />
        <p className='basis[100px] text-[.8em] font-[100]'>10,000 Provably-rare Bored Ape tokens</p>
        </span>
       <span className='flex flex-col w-[150px]'>
       <Image className='w-[100px]'
        src="/images/icon2.jpg"
        alt="2ndicon"
        width={109}
        height={132}
        />
        <p className='basis[100px] text-[.8em] font-[100] mt-[40px]'>Fair Launch, fair distribution: All apes cost 0.08 ETH</p>
        </span>
       <span className='flex flex-col w-[150px]'>
       <Image className='w-[100px]'
        src="/images/icon3.jpg"
        alt="3rdicon"
        width={129}
        height={158}
        />
        <p className='basis[100px] text-[.8em] font-[100] mt-[40px]'>Ownership and commercial usage rights given to the consumer over their NFT</p>
        </span>
       <span className='flex flex-col w-[150px]'>
       <Image className='w-[100px]'
        src="/images/icon4.jpg"
        alt="4thicon"
        width={210}
        height={337}
        />
        <p className='basis[100px] text-[.8em] font-[100] mb-[40px]'>The Bathroom: A member&apos;s-only graffiti board</p></span>
       <span className='flex flex-col w-[150px]'>
        <Image className='w-[100px]'
        src="/images/icon5.jpg"
        alt="5thicon"
        width={229}
        height={250}
        />
          <p className='basis[100px] text-[.8em] font-[100] mt-[50px]'>
            Gain additional benefits through roadmap activations
          </p>
        </span>
    </div>
    <hr id='hr' className='mt-[40px] ml-[30px] mr-[30px] block overflow-hidden border-b-slate-500 [unicode-bidi:isolate] [border-style:inset]'/>
        <div className='flex flex-col sm:flex-row m-[30px] justify-between'>
         <span className='basis-[700px] tracking-[5px] '>
               <h1><b>THE BATHROOM</b></h1>
               <p>The BAYC Bathroom will become operational once the presale period is over. It contains a canvas accessible only to wallets containing at least one ape. Like any good dive bar bathroom, this is the place to draw, scrawl, or write expletives.</p>
                <p>Each ape-holder will be able to paint a pixel on the bathroom wall every fifteen minutes. Think of it as a collaborative art experiment for the cryptosphere. A members-only canvas for the discerning minds of crypto twitter.</p>
               <p>We&apos;re pretty sure it&apos;s going to be full of dicks.</p>
          </span>
          <Image className='w-[162px]'
          src="/images/toilet.png"
          alt=""
          width={255}
          height={470}
          />
        </div>
    <hr id='hr' className='mt-[40px] ml-[30px] mr-[30px] block overflow-hidden border-b-slate-500 [unicode-bidi:isolate] [border-style:inset]'/>
    <span className='flex flex-col m-[30px] tracking-[5px]'>
        <h1 className='text-xl font-bold'><b>ROADMAP ACTIVATIONS</b></h1>
        <p className='w-auto sm:w-[850px]'>We’re in this for the long haul.</p>
        <p className='w-auto sm:w-[850px] sm:w-full'>We’ve set up some goalposts for ourselves. Once we hit a target sell through percentage, we will begin to work on realizing the stated goal.</p>
    </span>
    <div className='flex flex-col sm:flex-row'>
        <span className=''>
            <span className='flex ml-[50px] mr-[50px]'>
                <h1 className='h1'>10%</h1> <p className='text-left'><s>We pay back our moms.</s></p>
            </span>
            <span className='flex ml-[50px] mr-[50px]'>
                <h1 className='h1'>20%</h1><p className='text-left'><s>We release the Caged Apes. 5 Caged Apes (tokens held back from the sale) are airdropped to random Apeholders.</s></p>
            </span>
            <span className='flex ml-[50px] mr-[50px]'>
                <h1 className='h1'>40%</h1><p className='text-left'><s>BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to Ape into Shitcoins To.</s></p>
            </span>
            <span className='flex ml-[50px] mr-[50px]'>
                <h1 className='h1'>60%</h1><p className='text-left'><s>Member-Exclusive BAYC Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other goodies.</s></p>
            </span>
            <span className='flex ml-[50px] mr-[50px]'>
                <h1 className='h1'>80%</h1><p className='text-left'><s>The clubhouse image becomes interactive and the Mysterious Note becomes legible, beginning a treasure hunt. The first to solve the mystery will be rewarded 5 ETH and a Bored Ape.</s></p>
            </span>
            <span className='flex ml-[50px] mr-[50px]'>
                <h1 className='h1'>90%</h1><p className='text-left'><s>The Bored Ape liquidity pool is initiated.</s></p>
            </span>
            <span className='flex ml-[50px] mr-[50px]'>
                <h1 className='h1'>100%</h1><p className='text-left'><s>The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed. And we cook up new ways to ape with our friends.</s></p>
            </span>
          </span>
          <Image className='h-[350px] bg-[#bfc500]'
          src="/images/shirt.jpg"
          alt="shirt-pic"
          width={720}
          height={756}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
// responsive design
//adebtive design

    // <div className='flex h-screen'>
    //    <div className='justify-center items-center h-[200px] w-[200px] bg-blue-700 border-2 border-black'>Box 1</div>
    //    <div className='justify-center items-center h-[200px] w-[200px] bg-blue-700 border-2 border-black'>Box 2</div>
    // </div>