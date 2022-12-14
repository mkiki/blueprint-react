import React from 'react';
import './Icon.css';

// https://spectrum.adobe.com/page/icons/

const ICONS = {
  anchor: <path d="M16.966,12.6355,15,9.9145l-2.05,2.721a.193.193,0,0,0,.126.3145h1.25a5.531,5.531,0,0,1-4.35,1.95V8.606l1.04-.0355a.359.359,0,0,0,.335-.3795V7.4325a.359.359,0,0,0-.335-.3795l-1.04.035L9.964,6.0285A2.96249,2.96249,0,0,0,11.5,3.58,2.58251,2.58251,0,0,0,9.0055.98,2.6445,2.6445,0,0,0,6.5,3.6375,2.8315,2.8315,0,0,0,8,6.0285V7.053H6.9965a.359.359,0,0,0-.335.3795V8.191a.359.359,0,0,0,.335.3795H8V14.864A5.423,5.423,0,0,1,3.675,12.95H4.85a.1935.1935,0,0,0,.126-.3145L3,9.9145l-1.966,2.721a.193.193,0,0,0,.126.3145h.9705c.966,2.65,3.8145,3.9695,6.875,3.9695s5.898-1.3195,6.864-3.9695H16.84a.193.193,0,0,0,.126-.3145ZM7.672,3.5615a1.3915,1.3915,0,0,1,1.3335-1.328A1.33,1.33,0,0,1,10.328,3.504,1.43651,1.43651,0,0,1,9.0055,4.8895,1.3915,1.3915,0,0,1,7.672,3.5615Z" />,
  bell: <g><path class="a" d="M9,18a2.203,2.203,0,0,0,2-2H7A2.203,2.203,0,0,0,9,18Z" />
          <path class="a" d="M13.5715,5.6925c0-1.7185-1.603-2.4455-3.5715-2.634V1.5A.5395.5395,0,0,0,9.4285,1h-.857A.5395.5395,0,0,0,8,1.5V3.0585c-1.9685.1885-3.5715.9155-3.5715,2.634C4.4285,13.4,2,13.0555,2,14.077V15H16v-.923C16,13,13.5715,13.4,13.5715,5.6925Z" /></g>,
  apps: <g><rect class="a" height="3" rx="0.5" width="3" x="1" y="1" />
          <rect class="a" height="3" rx="0.5" width="3" x="7" y="1" />
          <rect class="a" height="3" rx="0.5" width="3" x="13" y="1" />
          <rect class="a" height="3" rx="0.5" width="3" x="1" y="7" />
          <rect class="a" height="3" rx="0.5" width="3" x="7" y="7" />
          <rect class="a" height="3" rx="0.5" width="3" x="13" y="7" />
          <rect class="a" height="3" rx="0.5" width="3" x="1" y="13" />
          <rect class="a" height="3" rx="0.5" width="3" x="7" y="13" />
          <rect class="a" height="3" rx="0.5" width="3" x="13" y="13" /></g>,
  search: <path class="a" d="M16.5865,15.107,12.7,11.2215A6.413,6.413,0,1,0,11.2215,12.7l3.886,3.886a1.05,1.05,0,0,0,1.479-1.479ZM3,7.5A4.5,4.5,0,1,1,7.5,12,4.5,4.5,0,0,1,3,7.5Z" />,
  login: <path class="a" d="M9,.5A8.5,8.5,0,1,0,17.5,9,8.5,8.5,0,0,0,9,.5Zm5.491,13.59161a5.41289,5.41289,0,0,0-3.11213-1.56415.65361.65361,0,0,1-.5655-.65569V10.9256a.65656.65656,0,0,1,.16645-.42218A4.99536,4.99536,0,0,0,12.12006,7.3855c0-2.36029-1.25416-3.67963-3.14337-3.67963s-3.179,1.36835-3.179,3.67963A5.05147,5.05147,0,0,0,6.9892,10.5047a.655.655,0,0,1,.16656.42206v.94165a.64978.64978,0,0,1-.57006.65539,5.43158,5.43158,0,0,0-3.11963,1.5205,7.49965,7.49965,0,1,1,11.025.04731Z" />,
  help: <path class="a" d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm.0235,13.438a1.345,1.345,0,0,1-.11595-2.6875q.05795-.00251.11595,0a1.31,1.31,0,0,1,1.39719,1.21658q.00408.05912.00281.11842a1.29052,1.29052,0,0,1-1.4,1.3525Zm1.783-6.409-.1.105c-.3945.4145-.842.884-.842,1.1755a1.38555,1.38555,0,0,0,.1795.674l.0725.1385-.0565.2145a.30851.30851,0,0,1-.2835.189H8.4355a.43352.43352,0,0,1-.325-.1175A2.05554,2.05554,0,0,1,7.688,9.1455a3.0589,3.0589,0,0,1,1.1125-2.075c.1-.1095.195-.21.2875-.3045.3145-.3255.5065-.5355.5065-.7575,0-.154,0-.6225-.893-.6225a2.959,2.959,0,0,0-1.5795.4595.296.296,0,0,1-.3265-.01L6.677,5.751l-.0275-.2215v-1.45A.4395.4395,0,0,1,6.846,3.67a4.13751,4.13751,0,0,1,2.15-.55,2.55036,2.55036,0,0,1,2.75,2.636A3.0655,3.0655,0,0,1,10.8065,8.029Z" />,
  home: <path class="a" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
}

class Icon extends React.Component{
  
  render() {
    const icon = this.props.name;
    const style = this.props.style || "normal";
    const classes = `icon icon-${style}`;
    return (
      <span className={classes}>
        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
          {ICONS[icon]}
        </svg>
      </span>
  )}
}

export default Icon;
