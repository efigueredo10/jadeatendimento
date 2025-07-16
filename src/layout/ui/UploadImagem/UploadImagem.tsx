import { useState } from 'react';

function UploadImagem() {
  const [imagem, setImagem] = useState(null);

  const handleChange = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo && arquivo.type.startsWith('image/')) {
      setImagem(URL.createObjectURL(arquivo));
    } else {
      setImagem(null);
    }
  };

  return (
    <div>
      <input type='file' accept='image/*' onChange={handleChange} />

      {imagem && (
        <div style={{ marginTop: '1rem' }}>
          <img src={imagem} alt='Pré-visualização' style={{ maxWidth: '200px', borderRadius: '8px' }} />
        </div>
      )}
    </div>
  );
}

export default UploadImagem;
