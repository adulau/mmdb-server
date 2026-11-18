/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{m as Z}from"./chunk-E4EMJARX.js";import{a as $}from"./chunk-YCSGENO5.js";import{q as W,r as Y}from"./chunk-3VQOL2NW.js";import{O as Q,R as X,U as T,X as q,b as V,e as G,l as c,n as K}from"./chunk-DNNVKOIB.js";import{h as F,k as U,l as D,m as z,q as H}from"./chunk-2IDMCIF6.js";var J=Object.freeze({cert:"Certificate",certRequest:"Certificate request",certCount:"{count} certificates",certDetails:"Details",certStructure:"ASN.1",certSubject:"Subject",certIssuer:"Issuer",certSerial:"Serial number",certVersion:"Version",certValidity:"Validity",certFrom:"From",certTo:"To",certPublicKey:"Public key",certBits:"{bits} bits",certSignature:"Signature",certFingerprints:"Fingerprints",certExtensions:"Extensions",certCritical:"critical",certNoExtensions:"No extensions",certSelfSigned:"Self-signed",certIssuedBy:"Issued by certificate {index}",certIssuerMissing:"Issuer not in this list",certValid:"Valid, {days} days left",certExpiring:"Expires in {days} days",certExpired:"Expired {days} days ago",certFuture:"Not valid yet (in {days} days)",certWeakSha1:"Signed with SHA-1, which is no longer secure.",certWeakMd5:"Signed with MD5, which is broken.",certWeakRsa:"RSA key of {bits} bits: 2048 bits or more are expected.",certPrivateKey:"A private key was found in the input. It is not shown.",certSkipped:"{count} other blocks were ignored.",certInvalid:"Block {index} could not be read: {message}",certNone:"No certificate found.",certCopyPem:"Copy PEM",certCopyFingerprint:"Copy",certFingerprintUnavailable:"Not available in this context (needs HTTPS)",certLength:"{length} bytes"}),ee={cert:"Certificat",certRequest:"Demande de certificat",certCount:"{count} certificats",certDetails:"D\xE9tails",certStructure:"ASN.1",certSubject:"Sujet",certIssuer:"\xC9metteur",certSerial:"Num\xE9ro de s\xE9rie",certVersion:"Version",certValidity:"Validit\xE9",certFrom:"Du",certTo:"Au",certPublicKey:"Cl\xE9 publique",certBits:"{bits} bits",certSignature:"Signature",certFingerprints:"Empreintes",certExtensions:"Extensions",certCritical:"critique",certNoExtensions:"Aucune extension",certSelfSigned:"Auto-sign\xE9",certIssuedBy:"\xC9mis par le certificat {index}",certIssuerMissing:"\xC9metteur absent de la liste",certValid:"Valide, encore {days} jours",certExpiring:"Expire dans {days} jours",certExpired:"Expir\xE9 depuis {days} jours",certFuture:"Pas encore valide (dans {days} jours)",certWeakSha1:"Sign\xE9 avec SHA-1, qui n\u2019est plus s\xFBr.",certWeakMd5:"Sign\xE9 avec MD5, qui est cass\xE9.",certWeakRsa:"Cl\xE9 RSA de {bits} bits : 2048 bits ou plus sont attendus.",certPrivateKey:"Une cl\xE9 priv\xE9e a \xE9t\xE9 trouv\xE9e dans le texte. Elle n\u2019est pas affich\xE9e.",certSkipped:"{count} autres blocs ont \xE9t\xE9 ignor\xE9s.",certInvalid:"Le bloc {index} n\u2019a pas pu \xEAtre lu : {message}",certNone:"Aucun certificat trouv\xE9.",certCopyPem:"Copier le PEM",certCopyFingerprint:"Copier",certFingerprintUnavailable:"Indisponible dans ce contexte (HTTPS requis)",certLength:"{length} octets"};var te=`/*
 * X.509 certificates: one card per certificate (names, validity, key, extensions and
 * fingerprints), and the ASN.1 structure as nested disclosures.
 */
.cert-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.cert-card {
  --_tone: var(--_success);
  border: 1px solid var(--_border);
  border-inline-start: 3px solid var(--_tone);
  border-radius: var(--_radius);
  background: var(--_surface);
}

.cert-card.state-expiring,
.cert-card.state-future {
  --_tone: var(--_warning);
}

.cert-card.state-expired {
  --_tone: var(--_danger);
}

.cert-card.state-none {
  --_tone: var(--_fg-muted);
}

.cert-card.current {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.cert-card .notice {
  margin: 0 var(--_space-4) var(--_space-3);
}

.cert-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-3) var(--_space-4);
}

.cert-index {
  display: inline-grid;
  min-width: 1.6em;
  height: 1.6em;
  place-items: center;
  border-radius: var(--_radius-full, 999px);
  background: var(--_surface-sunken);
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.cert-cn {
  margin: 0;
  color: var(--_fg);
  font-family: var(--_font-mono);
  font-size: 1em;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.cert-tag {
  padding: 1px var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.cert-tag.critical {
  margin-inline-start: var(--_space-2);
  border-color: color-mix(in srgb, var(--_warning) 50%, var(--_border));
  color: var(--_fg);
}

.cert-status {
  margin-inline-start: auto;
  padding: 1px var(--_space-2);
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_tone) 14%, transparent);
  color: var(--_fg);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.cert-facts {
  display: grid;
  margin: 0;
  padding: 0 var(--_space-4) var(--_space-3);
}

.cert-facts > div {
  display: grid;
  grid-template-columns: minmax(7rem, 11rem) minmax(0, 1fr);
  gap: var(--_space-3);
  padding: 6px 0;
  border-top: 1px solid var(--_border);
}

.cert-facts dt {
  color: var(--_fg-muted);
}

.cert-facts dd {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-3);
  min-width: 0;
  margin: 0;
}

.cert-name {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-3);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.rdn {
  overflow-wrap: anywhere;
}

.rdn-type {
  color: var(--_fg-muted);
}

.rdn.cn {
  color: var(--_accent);
  font-weight: 600;
}

.cert-hex {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

.cert-muted {
  color: var(--_fg-muted);
}

.cert-dates {
  display: grid;
  gap: 2px;
}

.cert-link {
  color: var(--_accent);
}

.cert-prints {
  display: grid;
  gap: var(--_space-1);
  min-width: 0;
}

.cert-print {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-2);
}

.cert-exts {
  padding: var(--_space-2) var(--_space-4) var(--_space-4);
  border-top: 1px solid var(--_border);
}

.cert-exts h4 {
  margin: var(--_space-2) 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.ext {
  display: grid;
  grid-template-columns: minmax(7rem, 11rem) minmax(0, 1fr);
  gap: var(--_space-3);
  padding: 6px 0;
}

.ext-name {
  color: var(--_fg);
}

.ext-values {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.ext-values li {
  min-width: 0;
  padding: 1px var(--_space-2);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
}

.ext-values code {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

.ext-label {
  margin-inline-end: var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- ASN.1 structure ---------- */

.asn1 {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.asn1 .asn1-node,
.asn1 .asn1-leaf {
  margin-inline-start: var(--_space-4);
}

.asn1 > .asn1-node {
  margin-inline-start: 0;
}

.asn1 summary {
  cursor: pointer;
}

.asn1 summary:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.asn1-row {
  display: inline-flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
  padding: 1px 0;
}

.asn1-tag {
  color: var(--_syntax-keyword, var(--_accent));
  font-weight: 600;
}

.asn1-len {
  color: var(--_fg-muted);
}

.asn1-value {
  color: var(--_syntax-string, var(--_fg));
  overflow-wrap: anywhere;
}

.cert-edit > .editor-body {
  max-height: min(40vh, 360px);
  border-bottom: 1px solid var(--_border);
}

@media (max-width: 560px) {
  .cert-facts > div,
  .ext {
    grid-template-columns: minmax(0, 1fr);
    gap: 2px;
  }
}
`;var h=class extends Error{constructor(e,t){super(`${e} (offset ${t})`),this.name="DerError",this.offset=t}},o=Object.freeze({BOOLEAN:1,INTEGER:2,BIT_STRING:3,OCTET_STRING:4,NULL:5,OID:6,UTF8:12,SEQUENCE:16,SET:17,NUMERIC:18,PRINTABLE:19,T61:20,IA5:22,UTC_TIME:23,GENERALIZED_TIME:24,VISIBLE:26,UNIVERSAL:28,BMP:30}),ye={1:"BOOLEAN",2:"INTEGER",3:"BIT STRING",4:"OCTET STRING",5:"NULL",6:"OBJECT IDENTIFIER",10:"ENUMERATED",12:"UTF8String",16:"SEQUENCE",17:"SET",18:"NumericString",19:"PrintableString",20:"T61String",22:"IA5String",23:"UTCTime",24:"GeneralizedTime",26:"VisibleString",28:"UniversalString",30:"BMPString"};function B(r,e={}){if(r.length>1048576)throw new h("Input too large",0);let t=e.start??0,n=e.end??r.length,s=re(r,t,n,0,{nodes:0});if(t+s.header+s.length!==n)throw new h("Unexpected bytes after the value",t+s.header+s.length);return s}function re(r,e,t,n,i){if(n>40)throw new h("Nested too deeply",e);if(i.nodes+=1,i.nodes>2e4)throw new h("Too many values",e);if(e>=t)throw new h("Unexpected end of data",e);let s=r[e],a=s>>6,l=(s&32)!==0,d=s&31,u=e+1;if(d===31){d=0;for(let x=0;;x+=1){if(u>=t)throw new h("Unexpected end of tag",u);if(x>=4)throw new h("Tag number too large",u);let w=r[u++];if(d=d*128+(w&127),!(w&128))break}}if(u>=t)throw new h("Unexpected end of length",u);let p=r[u++];if(p===128)throw new h("Indefinite length is not DER",u-1);if(p>128){let x=p&127;if(x>4)throw new h("Length too large",u-1);if(u+x>t)throw new h("Unexpected end of length",u);if(r[u]===0)throw new h("Length not minimally encoded",u);p=0;for(let w=0;w<x;w+=1)p=p*256+r[u++];if(p<128)throw new h("Length not minimally encoded",u-x)}let v=u-e;if(u+p>t)throw new h("Length goes past the end of its container",e);let E=null;if(l){E=[];let x=u,w=u+p;for(;x<w;){let S=re(r,x,w,n+1,i);E.push(S),x=S.start+S.header+S.length}}return{cls:a,tag:d,constructed:l,start:e,header:v,length:p,children:E,bytes:r}}function m(r){let e=r.start+r.header;return r.bytes.subarray(e,e+r.length)}function ne(r){return r.bytes.subarray(r.start,r.start+r.header+r.length)}function O(r){if(r.cls!==0||r.constructed)return null;let e=r.start+r.header,t=e+r.length;if(r.tag===o.BIT_STRING){if(r.bytes[e]!==0)return null;e+=1}else if(r.tag!==o.OCTET_STRING)return null;if(e>=t)return null;try{return B(r.bytes,{start:e,end:t})}catch{return null}}function g(r,e,t){if(!r||r.cls!==0||r.tag!==e)throw new h(`Expected ${t}`,r?.start??0);return r}function f(r,e){let t=r.children?.[e];if(!t)throw new h("Missing value",r.start);return t}function y(r){let e=m(r);if(!e.length||e.length>64)throw new h("Invalid object identifier",r.start);let t=[],n=0n;for(let i=0;i<e.length;i+=1)if(n=n*128n+BigInt(e[i]&127),e[i]&128){if(i===e.length-1)throw new h("Invalid object identifier",r.start)}else{if(t.length)t.push(String(n));else{let s=n<80n?n/40n:2n;t.push(String(s),String(n-s*40n))}n=0n}return t.join(".")}function b(r,e=":"){return Array.from(r,t=>t.toString(16).padStart(2,"0").toUpperCase()).join(e)}function ie(r){let e=m(r);for(;e.length>1&&e[0]===0;)e=e.subarray(1);return b(e)}function N(r){let e=m(r);if(!e.length||e.length>6)throw new h("Integer out of range",r.start);let t=0;for(let n of e)t=t*256+n;return e[0]&128?t-2**(8*e.length):t}function I(r){let e=m(r);if(r.tag===o.BMP){let t="";for(let n=0;n+1<e.length;n+=2)t+=String.fromCharCode(e[n]<<8|e[n+1]);return t}if(r.tag===o.UNIVERSAL){let t="";for(let n=0;n+3<e.length;n+=4){let i=(e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3])>>>0;t+=i<=1114111?String.fromCodePoint(i):"\uFFFD"}return t}return r.tag===o.UTF8?new TextDecoder("utf-8").decode(e):Array.from(e,t=>String.fromCharCode(t)).join("")}function C(r){let e=I(r),t=/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})?Z$/.exec(e),n=/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})?(?:\.\d+)?Z$/.exec(e),i=r.tag===o.UTC_TIME?t:n;if(!i)throw new h("Invalid time",r.start);let s=Number(i[1]);r.tag===o.UTC_TIME&&(s+=s<50?2e3:1900);let a=new Date(Date.UTC(s,Number(i[2])-1,Number(i[3]),Number(i[4]),Number(i[5]),Number(i[6]??0)));if(Number.isNaN(a.getTime()))throw new h("Invalid time",r.start);return a}function se(r){return r.cls===0?ye[r.tag]??`UNIVERSAL ${r.tag}`:r.cls===2?`[${r.tag}]`:`[${r.cls===1?"APPLICATION":"PRIVATE"} ${r.tag}]`}var we=20,oe={"2.5.4.3":"CN","2.5.4.4":"SN","2.5.4.5":"serialNumber","2.5.4.6":"C","2.5.4.7":"L","2.5.4.8":"ST","2.5.4.9":"street","2.5.4.10":"O","2.5.4.11":"OU","2.5.4.12":"title","2.5.4.15":"businessCategory","2.5.4.17":"postalCode","2.5.4.42":"GN","2.5.4.97":"organizationIdentifier","1.2.840.113549.1.9.1":"emailAddress","0.9.2342.19200300.100.1.25":"DC","0.9.2342.19200300.100.1.1":"UID","1.3.6.1.4.1.311.60.2.1.3":"jurisdictionC"},ce={"1.2.840.113549.1.1.2":"MD2 with RSA","1.2.840.113549.1.1.4":"MD5 with RSA","1.2.840.113549.1.1.5":"SHA-1 with RSA","1.2.840.113549.1.1.11":"SHA-256 with RSA","1.2.840.113549.1.1.12":"SHA-384 with RSA","1.2.840.113549.1.1.13":"SHA-512 with RSA","1.2.840.113549.1.1.14":"SHA-224 with RSA","1.2.840.113549.1.1.10":"RSASSA-PSS","1.2.840.10045.4.1":"ECDSA with SHA-1","1.2.840.10045.4.3.2":"ECDSA with SHA-256","1.2.840.10045.4.3.3":"ECDSA with SHA-384","1.2.840.10045.4.3.4":"ECDSA with SHA-512","1.2.840.10040.4.3":"DSA with SHA-1","2.16.840.1.101.3.4.3.2":"DSA with SHA-256","1.3.101.112":"Ed25519","1.3.101.113":"Ed448"},Ae={"1.2.840.113549.1.1.2":"md5","1.2.840.113549.1.1.4":"md5","1.2.840.113549.1.1.5":"sha1","1.2.840.10045.4.1":"sha1","1.2.840.10040.4.3":"sha1"},le={"1.2.840.113549.1.1.1":"RSA","1.2.840.113549.1.1.10":"RSASSA-PSS","1.2.840.10045.2.1":"EC","1.2.840.10040.4.1":"DSA","1.3.101.110":"X25519","1.3.101.111":"X448","1.3.101.112":"Ed25519","1.3.101.113":"Ed448"},Te={X25519:255,X448:448,Ed25519:255,Ed448:448},ue={"1.2.840.10045.3.1.7":["P-256",256],"1.3.132.0.34":["P-384",384],"1.3.132.0.35":["P-521",521],"1.3.132.0.10":["secp256k1",256],"1.3.36.3.3.2.8.1.1.7":["brainpoolP256r1",256],"1.3.36.3.3.2.8.1.1.11":["brainpoolP384r1",384],"1.3.36.3.3.2.8.1.1.13":["brainpoolP512r1",512]},de={"2.5.29.14":"Subject Key Identifier","2.5.29.15":"Key Usage","2.5.29.17":"Subject Alternative Name","2.5.29.18":"Issuer Alternative Name","2.5.29.19":"Basic Constraints","2.5.29.30":"Name Constraints","2.5.29.31":"CRL Distribution Points","2.5.29.32":"Certificate Policies","2.5.29.35":"Authority Key Identifier","2.5.29.37":"Extended Key Usage","1.3.6.1.5.5.7.1.1":"Authority Information Access","1.3.6.1.4.1.11129.2.4.2":"Signed Certificate Timestamps","1.3.6.1.5.5.7.1.24":"TLS Feature"},Ie=["digitalSignature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","keyCertSign","cRLSign","encipherOnly","decipherOnly"],P={"1.3.6.1.5.5.7.3.1":"TLS server","1.3.6.1.5.5.7.3.2":"TLS client","1.3.6.1.5.5.7.3.3":"Code signing","1.3.6.1.5.5.7.3.4":"Email protection","1.3.6.1.5.5.7.3.8":"Time stamping","1.3.6.1.5.5.7.3.9":"OCSP signing","2.5.29.37.0":"Any","1.3.6.1.4.1.311.10.3.12":"Document signing"},pe={"1.3.6.1.5.5.7.48.1":"OCSP","1.3.6.1.5.5.7.48.2":"CA issuers"},L={"2.23.140.1.2.1":"Domain validated","2.23.140.1.2.2":"Organization validated","2.23.140.1.2.3":"Individual validated","2.23.140.1.1":"Extended validation","2.5.29.32.0":"Any policy"},Ce={0:"Other",1:"Email",2:"DNS",3:"X400",4:"DirName",5:"EDI",6:"URI",7:"IP",8:"RID"};function fe(r){return oe[r]??ce[r]??le[r]??ue[r]?.[0]??de[r]??P[r]??pe[r]??L[r]??(r==="1.2.840.113549.1.9.14"?"Extension request":null)}function Ne(r){let e=r.replace(/\s+/g,"");if(!/^[A-Za-z0-9+/]*={0,2}$/.test(e)||e.length%4===1)throw new h("Invalid base64",0);let t=atob(e),n=new Uint8Array(t.length);for(let i=0;i<t.length;i+=1)n[i]=t.charCodeAt(i);return n}function _e(r){let e=/-----BEGIN ([A-Z0-9 ]{1,40})-----([\s\S]*?)-----END \1-----/g,t=[],n=0,i=0,s=!1;for(let a of r.matchAll(e)){s=!0;let l=a[1];/PRIVATE KEY/.test(l)?n+=1:/^(?:X509 |TRUSTED )?CERTIFICATE$|CERTIFICATE REQUEST$/.test(l)&&t.length<we?t.push({label:l,data:a[2].replace(/^[\w-]+:.*$/gm,"")}):i+=1}if(!s){let a=r.trim();a&&t.push({label:"",data:a})}return{blocks:t,privateKeys:n,skipped:i}}function ke(r){let e=r.replace(/[\s:]+/g,"");return/^[0-9a-f]+$/i.test(e)&&e.length%2===0&&/^30/i.test(e)?Uint8Array.from(e.match(/../g)??[],t=>parseInt(t,16)):Ne(r)}function he(r){let{blocks:e,privateKeys:t,skipped:n}=_e(r),i=[],s=[];return e.forEach((a,l)=>{try{i.push(Re(ke(a.data),a.label))}catch(d){s.push({index:l,message:d instanceof Error?d.message:String(d)})}}),{certificates:i,errors:s,privateKeys:t,skipped:n}}function Re(r,e=""){let t=B(r);g(t,o.SEQUENCE,"a certificate");let n=g(f(t,0),o.SEQUENCE,"the certificate content"),i=g(f(t,1),o.SEQUENCE,"a signature algorithm");g(f(t,2),o.BIT_STRING,"a signature");let s=y(g(f(i,0),o.OID,"an algorithm identifier")),a=f(n,0),l=/REQUEST/.test(e)||a.cls===0&&a.tag===o.INTEGER&&n.children?.[1]?.children?.[0]?.tag===o.SET,d=l?De(n):Ue(n),u=[],p=Ae[s];p&&u.push(p),d.publicKey.algorithm==="RSA"&&(d.publicKey.bits??0)<2048&&u.push("rsa-small");let v=ae(d.extensions,"2.5.29.14"),E=ae(d.extensions,"2.5.29.35");return{...d,signatureOid:s,signatureAlgorithm:ce[s]??s,weaknesses:u,keyId:v,authorityKeyId:E,selfSigned:!l&&A(d.subject)===A(d.issuer)&&(!v||!E||v===E),der:ne(t),root:t}}function Ue(r){let e=r.children??[],t=0,n=1;e[0]?.cls===2&&e[0].tag===0&&(n=N(g(f(e[0],0),o.INTEGER,"a version"))+1,t=1);let i=ie(g(e[t],o.INTEGER,"a serial number"));g(e[t+1],o.SEQUENCE,"a signature algorithm");let s=_(g(e[t+2],o.SEQUENCE,"an issuer name")),a=g(e[t+3],o.SEQUENCE,"a validity period"),l=_(g(e[t+4],o.SEQUENCE,"a subject name")),d=ge(g(e[t+5],o.SEQUENCE,"a public key")),u=[];for(let p of e.slice(t+6))p.cls===2&&p.tag===3&&(u=me(g(f(p,0),o.SEQUENCE,"extensions")));return{kind:"certificate",version:n,serial:i,issuer:s,subject:l,notBefore:C(f(a,0)),notAfter:C(f(a,1)),publicKey:d,extensions:u}}function De(r){let e=N(g(f(r,0),o.INTEGER,"a version"))+1,t=_(g(f(r,1),o.SEQUENCE,"a subject name")),n=ge(g(f(r,2),o.SEQUENCE,"a public key")),i=[],s=r.children?.[3];if(s?.cls===2&&s.tag===0)for(let a of s.children??[]){if(y(f(a,0))!=="1.2.840.113549.1.9.14")continue;let l=f(a,1);i=me(g(f(l,0),o.SEQUENCE,"extensions"))}return{kind:"request",version:e,serial:"",issuer:[],subject:t,notBefore:null,notAfter:null,publicKey:n,extensions:i}}function _(r){let e=[];for(let t of r.children??[])for(let n of t.children??[]){let i=y(g(f(n,0),o.OID,"a name type"));e.push({oid:i,type:oe[i]??i,value:I(f(n,1))})}return e}function A(r){return[...r].reverse().map(e=>`${e.type}=${e.value}`).join(", ")}function ge(r){let e=g(f(r,0),o.SEQUENCE,"a key algorithm"),t=y(g(f(e,0),o.OID,"a key algorithm")),n=le[t]??t,i=g(f(r,1),o.BIT_STRING,"a public key");if(n==="RSA"||n==="RSASSA-PSS"){let a=O(i)?.children?.[0];if(a&&a.tag===o.INTEGER){let l=m(a);for(;l.length>1&&l[0]===0;)l=l.subarray(1);let d=l.length*8-Math.clz32(l[0])+24;return{algorithm:n,bits:d,curve:null}}return{algorithm:n,bits:null,curve:null}}if(n==="EC"){let s=e.children?.[1],a=s?.tag===o.OID?y(s):"",l=ue[a];return{algorithm:n,bits:l?.[1]??null,curve:l?.[0]??(a||null)}}return{algorithm:n,bits:Te[n]??null,curve:null}}function me(r){return(r.children??[]).map(e=>{let t=y(g(f(e,0),o.OID,"an extension identifier")),n=e.children?.[1],i=n?.tag===o.BOOLEAN?m(n)[0]!==0:!1,s=g(f(e,n?.tag===o.BOOLEAN?2:1),o.OCTET_STRING,"an extension value"),a;try{a=Be(t,s)}catch{a=null}return{oid:t,name:de[t]??t,critical:i,entries:a??[{label:null,value:b(m(s))}]}})}function Be(r,e){let t=O(e);if(!t)return null;switch(r){case"2.5.29.17":case"2.5.29.18":return(t.children??[]).map(j);case"2.5.29.15":{let n=m(t),i=n[0]??0,s=[];return Ie.forEach((a,l)=>{let d=1+(l>>3);d<n.length&&(d<n.length-1||7-(l&7)>=i)&&n[d]&128>>(l&7)&&s.push({label:null,value:a})}),s}case"2.5.29.37":return(t.children??[]).map(n=>{let i=y(n);return{label:P[i]?null:"OID",value:P[i]??i}});case"2.5.29.19":{let n=t.children??[],i=n[0]?.tag===o.BOOLEAN&&m(n[0])[0]!==0,s=n.find(l=>l.tag===o.INTEGER),a=[{label:"CA",value:i?"true":"false"}];return s&&a.push({label:"pathLen",value:String(N(s))}),a}case"2.5.29.14":return[{label:null,value:b(m(t))}];case"2.5.29.35":{let n=[];for(let i of t.children??[])i.cls===2&&i.tag===0&&n.push({label:"keyid",value:b(m(i))}),i.cls===2&&i.tag===2&&n.push({label:"serial",value:b(m(i))});return n}case"2.5.29.31":return Oe(t);case"1.3.6.1.5.5.7.1.1":return(t.children??[]).map(n=>{let i=y(f(n,0));return{label:pe[i]??i,value:j(f(n,1)).value}});case"2.5.29.32":return(t.children??[]).map(n=>{let i=y(f(n,0));return{label:L[i]?i:null,value:L[i]??i}});default:return null}}function j(r){let e=r.cls===2?Ce[r.tag]??`[${r.tag}]`:"Name";if(r.cls!==2)return{label:e,value:b(m(r))};let t=m(r);switch(r.tag){case 1:case 2:case 6:return{label:e,value:Array.from(t,n=>String.fromCharCode(n)).join("")};case 7:return{label:e,value:Pe(t)};case 4:{let n=r.children?.[0];return{label:e,value:n?A(_(n)):""}}case 8:return{label:e,value:y({...r,cls:0,tag:o.OID})};default:return{label:e,value:b(t)}}}function Oe(r){let e=[],t=n=>{n.cls===2&&!n.constructed&&[1,2,6,7].includes(n.tag)&&e.push(j(n));for(let i of n.children??[])t(i)};return t(r),e}function Pe(r){if(r.length===4)return Array.from(r).join(".");if(r.length===16){let e=[];for(let s=0;s<16;s+=2)e.push((r[s]<<8|r[s+1]).toString(16));let t=[-1,0];for(let s=0;s<8;){if(e[s]!=="0"){s+=1;continue}let a=s;for(;a<8&&e[a]==="0";)a+=1;a-s>t[1]&&a-s>1&&(t=[s,a-s]),s=a}if(t[0]<0)return e.join(":");let n=e.slice(0,t[0]).join(":"),i=e.slice(t[0]+t[1]).join(":");return`${n}::${i}`}return b(r)}function ae(r,e){let t=r.find(i=>i.oid===e);return t?(e==="2.5.29.35"?t.entries.find(i=>i.label==="keyid"):t.entries[0])?.value??null:null}function xe(r,e){if(r.kind!=="certificate"||r.selfSigned)return-1;let t=A(r.issuer);return e.findIndex(n=>n!==r&&n.kind==="certificate"&&(r.authorityKeyId&&n.keyId?r.authorityKeyId===n.keyId:A(n.subject)===t))}function Ee(r,e){if(!r.notBefore||!r.notAfter)return{state:"none",days:0};let t=864e5;if(e<r.notBefore)return{state:"future",days:Math.ceil((r.notBefore.getTime()-e.getTime())/t)};let n=Math.floor((r.notAfter.getTime()-e.getTime())/t);return e>r.notAfter?{state:"expired",days:Math.floor((e.getTime()-r.notAfter.getTime())/t)}:{state:n<=30?"expiring":"valid",days:n}}function M(r){let e="";for(let i of r.der)e+=String.fromCharCode(i);let t=(btoa(e).match(/.{1,64}/g)??[]).join(`
`),n=r.kind==="request"?"CERTIFICATE REQUEST":"CERTIFICATE";return`-----BEGIN ${n}-----
${t}
-----END ${n}-----
`}z({en:J,fr:ee});var Le=["details","structure"],je=5e3,ve=class extends q{static type="cert";static fromData=Z;static dataAttributes=Object.freeze(["label","now"]);static componentAttributes=Object.freeze(["now","tabs","view","fingerprints","extensions"]);static presets={simple:{fingerprints:!0,extensions:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,tabs:!0,fingerprints:!0,extensions:!0}};static styles=[V,$,te];static allowEmpty=!0;constructor(){super(),this.parsed=null,this.fingerprintCache=new WeakMap,this.pending=new WeakSet,this.panelId=K("panel"),this.viewState=null,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}attributeChangedCallback(e,t,n){e==="view"&&(this.viewState=null),super.attributeChangedCallback(e,t,n)}contentChanged(){this.parsed=null}parse(){let e=this.text??"";return this.parsed?.text!==e&&(this.parsed={text:e,result:he(e)}),this.parsed.result}get certificates(){return this.parse().certificates.map(e=>({kind:e.kind,version:e.version,serial:e.serial,subject:A(e.subject),issuer:A(e.issuer),notBefore:e.notBefore,notAfter:e.notAfter,publicKey:{...e.publicKey},signatureAlgorithm:e.signatureAlgorithm,selfSigned:e.selfSigned,weaknesses:[...e.weaknesses],extensions:e.extensions.map(t=>({...t,entries:t.entries.map(n=>({...n}))})),pem:M(e)}))}get now(){let e=this.getAttribute("now"),t=e?new Date(e):null;return t&&!Number.isNaN(t.getTime())?t:new Date}get view(){return this.viewState??G(this.getAttribute("view"),Le,"details")}pemText(){return this.parse().certificates.map(M).join("")}renderContent(e){let t=this.t,n=this.parse(),i=this.view,s=this.feature("tabs")?X({tabs:[{id:"details",label:t("certDetails"),icon:"lock"},{id:"structure",label:t("certStructure"),icon:"list"}],selected:i,label:t("tabs"),panelId:this.panelId,onSelect:S=>this.selectView(S)}):null,a=c("div",{class:"panel",attrs:{id:this.panelId,role:s?"tabpanel":null}}),l=c("div",{class:"body cert-body",part:"body",attrs:{tabindex:"0",role:"region","aria-label":this.heading||t("cert")}});l.append(...this.notices(n)),i==="structure"?l.append(...n.certificates.map(S=>this.structure(S))):l.append(...n.certificates.map((S,Se)=>this.card(S,Se,n))),!n.certificates.length&&this.text?.trim()&&!n.errors.length&&l.append(c("div",{class:"empty",part:"empty",text:t("certNone")}));let d=[];if(this.editing){let S=this.createEditor();a.classList.add("cert-edit"),a.append(c("div",{class:"body editor-body",part:"body source"},S.element),l),d=this.historyButtons(S)}else a.append(l);let u=new Q(l),p={run:S=>u.run(S),go:S=>W(u.go(S)),clear:()=>u.clear()},v=n.certificates.length,E=()=>this.pemText(),x=[this.searchButton(p),...d,this.editToggleButton(),this.fullscreenButton(),this.feature("download")&&v?this.downloadButton(E,this.downloadName(v>1?"chain.pem":"certificate.pem"),"application/x-pem-file"):null,this.feature("copy")&&v?this.copyButton(E,t("certCopyPem")):null],w=s||!v?"":v>1?t("certCount",{count:v}):"X.509";e.append(...this.chrome({badge:w,tabs:s,actions:x}),a),this.editor?.align(),this.feature("fingerprints")&&this.computeFingerprints(n)}get heading(){let e=this.parse().certificates[0];return super.heading||(e?k(e.subject):"")}notices(e){let t=this.t,n=[];e.privateKeys&&n.push(T(t("certPrivateKey")));for(let i of e.errors)n.push(T(t("certInvalid",{index:i.index+1,message:i.message})));return e.skipped&&n.push(T(t("certSkipped",{count:e.skipped}))),n}card(e,t,n){let i=this.t,s=n.certificates,a=Ee(e,this.now),l=c("article",{class:`cert-card state-${a.state}`,part:"certificate",attrs:{id:this.cardId(t),"aria-label":k(e.subject)||i("cert")}}),d=c("header",{class:"cert-head"},s.length>1?c("span",{class:"cert-index",text:String(t+1)}):null,c("h3",{class:"cert-cn",text:k(e.subject)||A(e.subject)||"\u2014"}),e.kind==="request"?c("span",{class:"cert-tag",text:i("certRequest")}):null,e.selfSigned?c("span",{class:"cert-tag",text:i("certSelfSigned")}):null,this.statusView(a));l.append(d);for(let E of e.weaknesses){let x={sha1:"certWeakSha1",md5:"certWeakMd5","rsa-small":"certWeakRsa"}[E];x&&l.append(T(i(x,{bits:e.publicKey.bits??0})))}let u=c("dl",{class:"cert-facts"}),p=(E,...x)=>u.append(c("div",{},c("dt",{text:E}),c("dd",{},...x)));if(p(i("certSubject"),this.nameView(e.subject)),e.kind==="certificate"){let E=xe(e,s);p(i("certIssuer"),this.nameView(e.issuer),e.selfSigned?null:E>=0?c("a",{class:"cert-link",text:i("certIssuedBy",{index:E+1}),attrs:{href:`#${this.cardId(E)}`},on:{click:x=>this.goToCard(x,E)}}):s.length>1?c("span",{class:"cert-muted",text:i("certIssuerMissing")}):null),p(i("certValidity"),this.validityView(e)),p(i("certSerial"),c("code",{class:"cert-hex",text:e.serial}))}p(i("certVersion"),String(e.version));let v=e.publicKey;return p(i("certPublicKey"),[v.algorithm,v.curve,v.bits&&!v.curve?i("certBits",{bits:v.bits}):null].filter(Boolean).join(" \xB7 ")),p(i("certSignature"),e.signatureAlgorithm),this.feature("fingerprints")&&e.kind==="certificate"&&p(i("certFingerprints"),this.fingerprintView(e)),l.append(u),this.feature("extensions")&&l.append(this.extensionsView(e)),l}statusView(e){if(e.state==="none")return null;let t={valid:"certValid",expiring:"certExpiring",expired:"certExpired",future:"certFuture"}[e.state];return c("span",{class:`cert-status ${e.state}`,part:"status",text:this.t(t,{days:H(e.days,this.locale)})})}nameView(e){let t=c("span",{class:"cert-name",part:"name"});for(let n of[...e].reverse())t.append(c("span",{class:`rdn${n.type==="CN"?" cn":""}`,attrs:{title:n.oid}},c("span",{class:"rdn-type",text:`${n.type}=`}),n.value));return t}validityView(e){let t=this.t,n=new Intl.DateTimeFormat(this.locale,{dateStyle:"medium",timeStyle:"short",timeZone:"UTC"}),i=s=>s?c("time",{text:`${n.format(s)} UTC`,attrs:{datetime:s.toISOString()}}):"\u2014";return c("span",{class:"cert-dates"},c("span",{},c("span",{class:"cert-muted",text:`${t("certFrom")} `}),i(e.notBefore)),c("span",{},c("span",{class:"cert-muted",text:`${t("certTo")} `}),i(e.notAfter)))}fingerprintView(e){let t=this.t,n=this.fingerprintCache.get(e);if(n===null)return c("span",{class:"cert-muted",text:t("certFingerprintUnavailable")});let i=c("span",{class:"cert-prints"});if(!n)return i;for(let[s,a]of[["SHA-256",n.sha256],["SHA-1",n.sha1]])i.append(c("span",{class:"cert-print",part:"fingerprint"},c("span",{class:"cert-muted",text:s}),c("code",{class:"cert-hex",text:a}),this.copyTextButton(()=>a,t("certCopyFingerprint"),`print-${s}-${e.serial}`)));return i}extensionsView(e){let t=this.t,n=c("section",{class:"cert-exts"},c("h4",{text:t("certExtensions")}));if(!e.extensions.length)return n.append(c("p",{class:"cert-muted",text:t("certNoExtensions")})),n;for(let i of e.extensions){let s=c("ul",{class:"ext-values"});for(let a of i.entries)s.append(c("li",{},a.label?c("span",{class:"ext-label",text:a.label}):null,c("code",{text:a.value})));n.append(c("div",{class:"ext",part:"extension"},c("div",{class:"ext-name",attrs:{title:i.oid}},i.name,i.critical?c("span",{class:"cert-tag critical",text:t("certCritical")}):null),s))}return n}structure(e){let t={rows:0},n=c("div",{class:"asn1",part:"structure"});return n.append(c("h3",{class:"cert-cn",text:k(e.subject)||this.t("cert")}),this.asn1Node(e.root,0,t)),n}asn1Node(e,t,n){n.rows+=1;let i=c("span",{class:"asn1-row"},c("span",{class:"asn1-tag",text:se(e)}),c("span",{class:"asn1-len",text:this.t("certLength",{length:e.length})}),e.constructed?null:c("span",{class:"asn1-value",text:Me(e)}));if(!e.constructed||!e.children?.length)return c("div",{class:"asn1-leaf"},i);let s=c("details",{class:"asn1-node",attrs:{open:t<3}},c("summary",{},i));for(let a of e.children){if(n.rows>=je)break;s.append(this.asn1Node(a,t+1,n))}return s}cardId(e){return`${this.panelId}-c${e}`}goToCard(e,t){e.preventDefault();let n=this.root.getElementById?.(this.cardId(t));n&&(n.scrollIntoView({block:"nearest"}),n.classList.add("current"),setTimeout(()=>n.classList.remove("current"),1200))}selectView(e){e!==this.view&&(this.viewState=e,this.render(),this.root.querySelector(`[data-tab="${e}"]`)?.focus(),D(this,U.TAB_CHANGE,{tab:e}))}computeFingerprints(e){let t=e.certificates.filter(s=>s.kind==="certificate"&&!this.fingerprintCache.has(s)&&!this.pending.has(s));if(!t.length)return;let n=globalThis.crypto?.subtle;if(!n){for(let s of t)this.fingerprintCache.set(s,null);return}for(let s of t)this.pending.add(s);let i=async s=>{try{let a=s.der.slice(),[l,d]=await Promise.all([n.digest("SHA-256",a),n.digest("SHA-1",a)]);this.fingerprintCache.set(s,{sha256:b(new Uint8Array(l)),sha1:b(new Uint8Array(d))})}catch{this.fingerprintCache.set(s,null)}this.pending.delete(s)};Promise.all(t.map(i)).then(()=>{this.parsed?.result===e&&this.isConnected&&this.render()})}createEditor(){return this.editor?.destroy(),this.editor=new Y({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:F().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>D(this,U.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.parsed=null,this.render()},400)}};function k(r){return[...r].reverse().find(e=>e.type==="CN")?.value??""}function Me(r){if(r.cls!==0){let e=m(r);return r.length<=64&&e.every(t=>t>=32&&t<127)?Array.from(e,t=>String.fromCharCode(t)).join(""):R(b(m(r)," "))}try{switch(r.tag){case o.OID:{let e=y(r),t=fe(e);return t?`${e} (${t})`:e}case o.BOOLEAN:return m(r)[0]?"true":"false";case o.NULL:return"";case o.UTC_TIME:case o.GENERALIZED_TIME:return C(r).toISOString();case o.UTF8:case o.PRINTABLE:case o.IA5:case o.T61:case o.VISIBLE:case o.NUMERIC:case o.BMP:case o.UNIVERSAL:return R(I(r));default:return R(b(m(r)," "))}}catch{return R(b(m(r)," "))}}function R(r){return r.length>96?`${r.slice(0,95)}\u2026`:r}export{ve as a};
//# sourceMappingURL=chunk-GCJIYL5J.js.map
