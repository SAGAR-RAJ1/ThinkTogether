import "./Cards.css"
import Idea from "../Idea/Idea"
export default function Cards() {
  return (
  <>
     <div className="container mt-5 " >
        <h2 className="mb-5"  id="ideaCont">The Featured Cards</h2>

        <hr /><br /><br />
        <div className="ideas">


        <div className="d-flex flex-wrap gap-4   ">
  <Idea link="./images/img.png"  desc="lore dkb ilbgeuwg ufduewug ucviwef7frgbxoug2oknkw bfii dfguofouuofubckubekuhvcueyvvcrogougbfougkvckiuefroyfgkehfku giu"/>
  <Idea link="./images/img.png" desc="hy" />
  <Idea link="./images/src.jpeg" desc="bfvufudcudvjfkkuyfkufjydtsrharstdkfklufkfyfjdvtrsdusuluvgluyulyfudfkydrtsdhrsqwertyuiokjnbvcxswer5678uikjnbvcder567uikj " />
  <Idea link="./images/src.jpeg" />
  <Idea link="./images/src.jpeg" />
  <Idea link="./images/src.jpeg" />
  <Idea link="./images/img.png" />

  <Idea link="./images/img.png" />

</div>
        </div>
     </div>
  </>
  )
}
