import { useState } from 'react';
import './App.css';
import QrcodeLink from 'qrcode'
import QRCode from "react-qr-code"

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url) {
    QrcodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrcodeLink(url)
    })
  }

  function handleQrcode (e) {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className="container">
      <h3>Gerador de qrcodes Tecla Enter</h3>

      <QRCode 
      value={link}
      />

      <input className="input"
      placeholder="Digite o link aqui..."
      value={link}
      onChange={ (e) => handleQrcode(e)}
      />
      <a href={qrcodeLink} className="btn" download='qrcode.png'>
        Baixar Qrcode
      </a>
    </div>
  );
}

export default App;
