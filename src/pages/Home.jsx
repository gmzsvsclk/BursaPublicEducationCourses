import React from 'react'
import '/src/App.css'



function Home() {
  return (
    <>











<div style={{
    backgroundImage: 'url("https://i.pinimg.com/originals/47/ed/20/47ed20079cbb142cf22ffca03a937713.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    marginTop:'0px',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: '50px',
  }}>
  <div className='container' style={{ textAlign: 'center' }}>
  
    <img
      src="https://www.olay.com.tr/wp-content/uploads/2021/10/1.-YAZI-I%CC%87C%CC%A7I%CC%87N-BU%CC%88YU%CC%88KS%CC%A7EHI%CC%87R-BELEDI%CC%87YE-BAS%CC%A7KANI-ALI%CC%87NUR-AKTAS%CC%A7-1.jpg"
      style={{
        width: '28%',
        margin: '0px auto 0',
        display: 'block',
        marginRight:'10000px',
        borderRadius: '100px',
      }}
      alt="görsel bulunamadı!"
      
    />
    
    <div style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '50px', marginRight:'900px', color:'white' }}>
      Alinur AKTAŞ
      <p style={{fontWeight:'bold', margin: '5px', paddingBottom:'10px', color:'white' }}>Bursa Büyükşehir Belediye Başkanı</p>
    </div> 
  </div>
</div>
</>
  )
}

export default Home