import{s as t,c as r,L as e,h as i}from"./vendor.5f4276eb.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver((t=>{for(const e of t)if("childList"===e.type)for(const t of e.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&r(t)})).observe(document,{childList:!0,subtree:!0})}function r(t){if(t.ep)return;t.ep=!0;const r=function(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?r.credentials="include":"anonymous"===t.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(t);fetch(t.href,r)}}();class n{constructor(t){this.hasError="",this.data=t||Int8Array.of(0)}static fromString(t){const r=Int8Array.of(0),e=t.split("").map((t=>parseInt(t)));for(const i of e)r[0]<<=1,r[0]|=i;return new this(r)}toString(){if(this.hasError)return this.hasError;let t="";for(let r=0;r<8;r++)r%4==0&&(t=" "+t),t=(1&this.data[0])+t,this.data[0]>>=1;return t.trim()}static fromNumber(t){return new this(Int8Array.from([t]))}toNumber(){return this.data[0]}fromSignedMagnitude(){return 128&this.data[0]&&(this.data[0]^=127),this.fromOnes(),this}toSignedMagnitude(){return this.toOnes(),128&this.data[0]&&(this.data[0]^=127),this}fromOnes(){return this.data[0]<0&&(this.data[0]+=1),this}toOnes(){return-128==this.data[0]&&(this.hasError="can't fit in 8 bits"),this.data[0]<0&&(this.data[0]-=1),this}excess128(){return this.data[0]^=128,this}}var o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=(t,r,e,i)=>{for(var n,a=i>1?void 0:i?s(r,e):r,d=t.length-1;d>=0;d--)(n=t[d])&&(a=(i?n(r,e,a):n(a))||a);return i&&a&&o(r,e,a),a};let d=class extends e{constructor(){super(...arguments),this.binaryNumber="",this.decimalNumber=0}render(){return i`
      <div class="section">
        <label>
          <h3>Convert Binary to Decimal</h3>
          <input id="bin" type="number" min="0" max="11111111" @input="${this._binChange}" />
        </label>
        ${this.binaryError?i`<p class="error">${this.binaryError}</p>`:void 0}
        <table>
          <tbody>
            <tr>
              <th scope="row">Signed Magnitude</th>
              <td>${n.fromString(this.binaryNumber).fromSignedMagnitude().toNumber()}</td>
            </tr>
            <tr>
              <th scope="row">One's Complement</th>
              <td>${n.fromString(this.binaryNumber).fromOnes().toNumber()}</td>
            </tr>
            <tr>
              <th scope="row">Two's Complement</th>
              <td>${n.fromString(this.binaryNumber).toNumber()}</td>
            </tr>
            <tr>
              <th scope="row">Excess-128</th>
              <td>${n.fromString(this.binaryNumber).excess128().toNumber()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="section">
        <label>
          <h3>Convert Decimal to Binary</h3>
          <input id="dec" type="number" min="-128" max="127" @input="${this._decChange}" />
        </label>
        ${this.decimalError?i`<p class="error">${this.decimalError}</p>`:void 0}
        <table>
          <tbody>
            <tr>
              <th scope="row">Signed Magnitude</th>
              <td>${n.fromNumber(this.decimalNumber).toSignedMagnitude().toString()}</td>
            </tr>
            <tr>
              <th scope="row">One's Complement</th>
              <td>${n.fromNumber(this.decimalNumber).toOnes().toString()}</td>
            </tr>
            <tr>
              <th scope="row">Two's Complement</th>
              <td>${n.fromNumber(this.decimalNumber).toString()}</td>
            </tr>
            <tr>
              <th scope="row">Excess-128</th>
              <td>${n.fromNumber(this.decimalNumber).excess128().toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}_binChange(){let t=this.binInputElement.value;for(t=t.replace(/9/g,"1");t.includes("2");)t=t.replace(/12/g,"20"),t=t.replace(/(^2)|(02)/g,"10");if(this.binInputElement.value=t,t=t.replace(/[  ]/g,""),this.binaryError=void 0,t.match(/^[01]*$/))if(t.length>8)this.binaryError="input must be at most 8 bits long";else{for(;t.length<8;)t="0"+t;this.binaryNumber=t}else this.binaryError='input must be entirely "1" and "0"'}_decChange(){let t=parseInt(this.decInputElement.value);isNaN(t)&&(t=0),this.decimalError=void 0,-128>t||t>127?this.decimalError="input must be between 127 and -128":this.decimalNumber=t}get binInputElement(){return this.querySelector("input#bin")}get decInputElement(){return this.querySelector("input#dec")}createRenderRoot(){return this}};a([t()],d.prototype,"binaryNumber",2),a([t()],d.prototype,"binaryError",2),a([t()],d.prototype,"decimalNumber",2),a([t()],d.prototype,"decimalError",2),d=a([r("binary-converter")],d);
