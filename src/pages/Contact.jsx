import React,{useState} from 'react'
import './ContactInfo.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  
  console.log(formData);
};
  return (
    <div  className="text-danger">
      <h2>Bursa Büyükşehir Belediyesi Akıllı Şehircilik ve İnovasyon Dairesi Başkanlığı</h2>
       <div className="contact-info">
            <h2>İletişim Bilgileri</h2>
            <ul>
            <li><strong>Adres:</strong>Zafer Mh. Ankara Yolu Cd. C Blok No:1 PK:16080 Osmangazi / BURSA </li>
            <li><strong>Telefon:</strong> 444 16 00</li>
            <li><strong>E-posta:</strong> acikyesil@bursa.bel.tr</li>
               
 </ul>
  
        </div>
       
      
      
      
    </div>
  )
}

export default Contact