import React, { useState } from 'react'


import { Card, Col, Container, Row } from 'react-bootstrap'



const CategorySlider = () => {

  const [activeCategory, setActiveCategory] = useState('car');

  const categories = [
    {
      id: 'car',
      name: 'CAR',
      image: "https://s3-alpha-sig.figma.com/img/f315/f6eb/596c73a7864b51811e7fc074941f9cf3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WPly0D~Cx7jntK18oohkeRG0Fkws1wwjjjU9aERKcwS712LFUaE2yYZaJWLuZjK04AVQd3bYSR7ixu5rjgW0OiT2-vaiOHkC1xcIhulYfHbB1Au0~kYthX3euutvG~2W-Wqw3Le2mr7tEWyIfJHiyYYpMV1-obdwSqYCYVt8aaIC6aW2tWkmV637knncHbHMz52q6kX~0RlMmrIV9xtQ~rF3TpqGLeJiAisgXZTlWPhv4fb0b~us3iIUoYaB~2d~kKRyjP14JylvvRsjNdDCHLCcxFCeFnLN3BzVEH6~eyhwh7NbzfGHAlzivQ1qJHz0qK7RTTojLfOyA1Q6rLKi2A__"
    },
    {
      id: 'bike',
      name: 'BIKE',
      image: "https://s3-alpha-sig.figma.com/img/c0a8/f665/d2137ffd41bcc89962bb78fba00d3dcb?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bEFQ~D627BlVwK1u~tFHgI4JjmQDV-oCZpKjRW351p0XgNgqHnY5ai5OaMqrUPA1ShqNi0ZjMZcRibVRygyIzu0ia2hnSrekyUKSvtM4oH7hnPvuVmyDraKkjljkqn4Cog9M-ag7moh6YhsNGi3XCDhNIF61QOeDNG-ySAf-CcpbOnbwQO1p19ozZA4GRMpSc8A-FbKqGyWpRp0AZ0U6NgEEfuUpryrwlP5ksnWCZenrNypK9YgxjnQ8cybWq2wT7H3gsYkaUncez8ubWArd8eoEsH811ocGbtXV2QtboizxduooGqx0LRUlNAry~3Kf9bAtsKhPcpGMVe3o~hFFhg__"
    },
    {
      id: 'bus',
      name: 'BUS',
      image: "https://s3-alpha-sig.figma.com/img/cc6a/6163/8fc1f780237e506b5117a6d43e64b068?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KRNtQZutqOjRfY99hf1mfOdS1rKt-waF2kosgNTMz7a8KPIe6rsXsZqZwmQDVFjJnLDV9j9fd7yk7uPitopVDflYoEN5W~E21IC0ZNMAWY1oOyc41DytzGl4uzRrAQvl1qahJA2TWm402iosBFXa0NSfE9xZvKQcfm8TJbs6mXNkf~j-MafGcpW5eMRCmLh2EPEjZ0qAQup6J4TeqEbccgvVjjOIf3IkTMxPDJp3m41GPlXsxSEOztm9ZbjevhaoUDPFVXlf6l3IGhdF-p8c88DqM9psN8s7bn1Qh9NvOvCjnSO~t5JFhmTYOANe9lXKKgPigvbGyVNDWlNFMaQLIA__"
    },
    {
      id: 'cycle',
      name: 'CYCLE',
      image: "https://s3-alpha-sig.figma.com/img/7ffa/a12b/8b456a9068d03faaf64d71aa63f0baf6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SskMKEZhSDRIVqJ1oJqYc2MmndEhVnw6MdmLUhFCxYUbJX2yPDdQNm5jJgJXyrF-bUGID8FE1OAJZbdp82k8Kl0suDnD0WoL~30GJycH-RnveMLtbs5T8dJFpq1X~Rc9WsoIBUBjXc2fipLTp583J1GuvDQ6gfuz-BRmOiPETEEYG~6wfGtq7loOT3K1mXmFSP6XkWLJyi6cpprZbU2scF0gDB7j1ZYoVXEFiV7VaHbG0pPUXq~wjSwa5CKJ3Mb-J~TkSAsk0XlOLHwjdJDMvolxw-X0XkZYosOAIZL9l~eGMKPyfJm53pGOLR~OPsxdC5g7b40PbXayGSR-N8-rBQ__"
    },
    {
      id: 'scooty',
      name: 'SCOOTY',
      image: "https://s3-alpha-sig.figma.com/img/7a59/ea08/2c4c9a0a767d8deea420b14ae9f1a673?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XbaOoWqW2lXZ4wPIufg2sYNcp3wfBkqsC~C1zAzObz1es-s357jhdUFAjETeqJj6Q5r2FRZK2xjSF8EHqTczHEKibC1A5D~VuikOK1KRCGSelv7Nx2TAH4zXBYb~KMYACFA3Ed5t5OnRDgP5Ww6~NKM5SfFi6xtMco4T4jC8QmpJfAOVz1vGNFvm1JXwYGZwo4oX4pLuT0t2R8qq5SUhoxPR3FoIysWwvKszOfpEYM43g05jW9WoBbo06spTO-I8k~p4GiYz4dItz6tkFxF2oL5zh11hR6ESra-MkYuA39kVQ3GRI2lPhBr8TZNG3a2iL1j1SQhDPLR3OZMnuoPykA__"
    }
  ];
  return (
   <Container className='py-5'>
    <Row className='justify-content-center'>
    {categories.map((category)=>(
      <Col   key={category.id}  onClick={() => setActiveCategory(category.id)} className='d-flex justify-content-center mb-5'>
    
       <Card  className='curser-pointer' style={{width:'8rem',height:'5rem',position:'relative',border:'none',cursor:'pointer', boxShadow: '0 4px 6px rgba(0, 123, 255, 0.5)',overflow: "visible", }}>

     <Card.Body  className="d-flex flex-column justify-content-center align-items-center"  style={{ position: "relative", textAlign: "center",
          }}>
         
       
         <div>
            <Card.Title style={{ fontSize: "1rem",  paddingBottom: "1.8rem", zIndex: 2, position: "relative"}}>{category?.name}</Card.Title>
            
         
            <div style={{ position: "absolute",top: "77%",left: "50%",transform: "translate(-50%, -40%)",width: "6rem",height: "6rem",overflow: "hidden", zIndex: 1,}}>
            <img src={category?.image} className="w-100 h-100" style={{ objectFit: "contain",}} alt="Car"/>
          </div>
         </div>
          
          
        </Card.Body>
       </Card>
      </Col>
     ))}
    </Row>

   </Container>
  )
}

export default CategorySlider