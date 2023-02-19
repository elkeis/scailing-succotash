import { css, html } from 'lit';
import { useCallback, useEffect, useState } from 'haunted';
import './chat.css';

export const chat = (mountPoint) => {
  const [message, setMessage] = useState('this is test message');
  useEffect(() => {
    const int = setInterval(() => {
      setMessage((message) => message + 1);
    }, 500);
    return () => clearInterval(int)
  }, []);

  const click = useCallback(() => {
    alert('clicked' + message);
  }, [message]);

  return html`<div class="chat" @click=${click}>
    <div class="body">
      <div class="message">
        <p>${message}</p>
      </div>
    </div>
    <div class="controls">
      <div class="input">
        this is input
      </div>
      <div class="send">
        this is send button
      </div>
    </div>
  </div>`;
}
