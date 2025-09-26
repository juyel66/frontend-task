

import Comment from './Comment'
import AskQues from './components/AskQues'
import CardSection from './components/CardSection'
import Hero from './components/Hero'
import Navber from './components/Navber'
import PostSection from './components/PostSection'
import Postsection2 from './components/Postsection2'
import Postsection3 from './components/Postsection3'
import Footer from './Footer'


function MainSection() {
  

  return (
    <>
      <div>
      {/* <h2 className='text-6xl bg-amber-500 '>hlw</h2> */}
      </div>
    <Navber></Navber>
   <Hero></Hero>
   <CardSection></CardSection>
   <PostSection></PostSection>
   <Postsection2></Postsection2>
   <Postsection3></Postsection3>
   <Comment></Comment>
   <AskQues></AskQues>
  <Footer></Footer>
    </>
  )
}

export default MainSection;