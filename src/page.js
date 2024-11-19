import React, {useState, useEffect} from "react";

const Page = (props) => {
    const {logo1B, z01, z02, z03, z04, z05, z06} = props.allImg,
          {copyBtn} = props.copyBtn,
          {tw, tg, pf, ray, dexs, dext} = props.socialLink
    ;

    const image3 = [
        z01, z02, z03, z04, z05, z06
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image3.length);
        }, 1 * 3000); 

        return() => clearInterval(interval);
    }, [image3.length]);

    const [text, setTxt] = useState("4eQ2uN86itsMK5rtvy598TchcttxXCKh3xpXxUa2pump");
    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert("CA copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy text:", err)
        }) ;
    }

    return ( 
        <main className="allSectiion">
            <div className="descriptionImg">
                <span>
                    <h1>Zcash Mascot</h1>
                    <span className="logoImg1">
                        <img src={logo1B} alt="logo" />
                    </span>
                    <p>
                        "Zcash Mascot tickered as Zebrigrade has arrived to secure and 
                        protect everyday transactional data on the blockchain"
                    </p>
                </span>
                <span className="logoImg2">
                    <img src={logo1B} alt="logo" />
                </span>
            </div>
            <div className="caSection">
                <span>
                    <h5>
                        Ca:
                    </h5>
                    <p>
                        4eQ2uN86itsMK5rtvy598TchcttxXCKh3xpXxUa2pump
                    </p>
                </span>
                <span>
                    <img onClick={handleCopy} src={copyBtn} alt="copy btn image" />
                </span>

            </div>
            <div className="allSC-Btn">
                <div className="allSocHandle">
                    <span><a href="https://x.com/zebrigrade" target="_blank"><img src={tw} alt="twitter logo" /></a></span>
                    <span><a href="https://t.me/Zcash_Mascot"><img src={tg} alt="telegram logo" /></a></span>
                    <span><a href="https://pump.fun/4eQ2uN86itsMK5rtvy598TchcttxXCKh3xpXxUa2pump" target="_blank"><img src={pf} alt="pumpfun logo" /></a></span>
                    <span><a href="https://raydium.io/swap/?inputMint=sol&outputMint=4eQ2uN86itsMK5rtvy598TchcttxXCKh3xpXxUa2pump" target="_blank"><img src={ray} alt="raydium logo" /></a></span>
                    <span><a href="https://dexscreener.com/solana9mtnz8ucawniebfbsdtbyjyotzpahtdxb559whaavdax" target="_blank"><img src={dexs} alt="dexscreener logo" /></a></span>
                    <span><a href="https://www.dextools.io/app/en/solana/pair-explorer/4eQ2uN86itsMK5rtvy598TchcttxXCKh3xpXxUa2pump" target="_blank"><img src={dext} alt="dextools logo" /></a></span>
                </div>
                <button><a href="https://raydium.io/swap/?inputMint=sol&outputMint=4eQ2uN86itsMK5rtvy598TchcttxXCKh3xpXxUa2pump" target="_blank">BUY $Zebrig</a></button>
            </div>
            <div className="storySection">
                <h3>
                    Zcash Mascot - Zebrigrade
                </h3>
                <div>
                    <span>
                        <img src={image3[currentImageIndex]}  alt="img"/>
                    </span>
                    <p>
                        I asked Grok to name Zooko's official Zcash mascot and got this: 
                        Given the unique combination of a water bear (tardigrade) with 
                        zebra stripes, and considering its association with $ZEC, which 
                        is likely a reference to Zcash, a cryptocurrency known for its 
                        privacy features, here's a name that might fit: Zebrigrade. 
                        This name combines "zebra" for its distinctive stripes and "tardigrade," 
                        which is another name for water bear, reflecting both the physical 
                        appearance and the scientific name of the creature. It's catchy, 
                        memorable, and ties into the cryptocurrency theme with a hint of 
                        privacy and uniqueness, much like Zcash itself.
                    </p>
                </div>
            </div>
            <div className="memeSection">
                <h3>
                    Zebrigrade has multiple-legs, lol..
                </h3>
                <div>
                    <span>
                        <img src={z01}  alt="img"/>
                    </span>
                    <span>
                        <img src={z02}  alt="img"/>
                    </span>
                </div>
            </div>
        </main>
    );
}
 
export default Page;