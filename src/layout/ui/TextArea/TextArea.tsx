import { useState } from 'react';

function TextArea() {
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setMensagem(e.target.value);
  };

  return (
    <div>
      <label htmlFor='mensagem'>Mensagem:</label>
      <br />
      <textarea
        id='mensagem'
        value={mensagem}
        onChange={handleChange}
        rows={4}
        cols={50}
        placeholder='Digite sua mensagem aqui...'
        style={{ padding: '8px', borderRadius: '4px', resize: 'vertical' }}
      />
      <p>Você digitou: {mensagem}</p>
    </div>
  );
}

export default TextArea;
