"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[1001],{28812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var c=r(17624),n=r(4552);const s={title:"Backup and Restore",id:"backup-restore"},a=void 0,d={id:"desktop/backup-restore",title:"Backup and Restore",description:"Create a Backup",source:"@site/docs/desktop/backup-restore.md",sourceDirName:"desktop",slug:"/desktop/backup-restore",permalink:"/docs/desktop/backup-restore",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/desktop/backup-restore.md",tags:[],version:"current",frontMatter:{title:"Backup and Restore",id:"backup-restore"},sidebar:"desktop",previous:{title:"Upload Content",permalink:"/docs/desktop/upload-content"},next:{title:"Publish a Website",permalink:"/docs/desktop/publish-a-website"}},o={},i=[{value:"Create a Backup",id:"create-a-backup",level:2},{value:"Back-up Gnosis Chain Key Only",id:"back-up-gnosis-chain-key-only",level:3},{value:"Restore from Backup",id:"restore-from-backup",level:2},{value:"Restore Gnosis Chain Account",id:"restore-gnosis-chain-account",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,n.M)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"create-a-backup",children:"Create a Backup"}),"\n",(0,c.jsx)(t.p,{children:"To create a backup of your Bee node in Swarm Desktop, start by shutting down your node."}),"\n",(0,c.jsxs)(t.p,{children:["Right click the Bee icon in the System tray and select ",(0,c.jsx)(t.code,{children:"Stop Bee"})," and then ",(0,c.jsx)(t.code,{children:"Quit"})," to close and exit from Swarm Desktop:"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(28420).c+"",width:"343",height:"502"})}),"\n",(0,c.jsxs)(t.p,{children:["Next navigate to the ",(0,c.jsx)(t.code,{children:"Settings"})," tab in the app and copy the location of the data directory as indicated in the ",(0,c.jsx)(t.code,{children:"Data DIR"})," field:"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(78765).c+"",width:"2541",height:"1165"})}),"\n",(0,c.jsxs)(t.p,{children:["Navigate to the directory you just copied and create copies of all the files in that directory (",(0,c.jsx)(t.code,{children:"\\data-dir"}),"), including ",(0,c.jsx)(t.code,{children:"localstore"}),", ",(0,c.jsx)(t.code,{children:"statestore"}),", ",(0,c.jsx)(t.code,{children:"stamperstore"}),", ",(0,c.jsx)(t.code,{children:"kademlia-metrics"})," and ",(0,c.jsx)(t.code,{children:"keys"})," folders and store them in a secure and private location."]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(60336).c+"",width:"952",height:"495"})}),"\n",(0,c.jsxs)(t.p,{children:["In addition to the data folders, you will also need the password found in the ",(0,c.jsx)(t.code,{children:"config.yaml"})," file in order to restore a Bee node from backup. Move up one directory from ",(0,c.jsx)(t.code,{children:"Data DIR"})," to the ",(0,c.jsx)(t.code,{children:"Data"})," directory, and create a copy of the ",(0,c.jsx)(t.code,{children:"config.yaml"})," file and save it along with the other folders you just backed up:"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(96180).c+"",width:"903",height:"535"})}),"\n",(0,c.jsxs)(t.p,{children:["Alternatively you may open the ",(0,c.jsx)(t.code,{children:"config.yaml"})," and save the password as a text file along with the rest of your backup files:"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(18168).c+"",width:"1272",height:"641"})}),"\n",(0,c.jsxs)(t.p,{children:["Your completed backup should contain all the files from your data directory as well as your password (either in your ",(0,c.jsx)(t.code,{children:"config.yaml"})," file or as a separate file or written down.)"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(60493).c+"",width:"1081",height:"519"})}),"\n",(0,c.jsx)(t.h3,{id:"back-up-gnosis-chain-key-only",children:"Back-up Gnosis Chain Key Only"}),"\n",(0,c.jsxs)(t.p,{children:["If you only wish to back-up your Gnosis Chain key, navigate to the ",(0,c.jsx)(t.code,{children:"\\data-dir\\keys"})," directory, and copy the ",(0,c.jsx)(t.code,{children:"swarm.key"})," to a safe location:"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(71772).c+"",width:"1135",height:"427"})}),"\n",(0,c.jsxs)(t.p,{children:["You also need the password found in the ",(0,c.jsx)(t.code,{children:"config.yaml"})," file in order to access your Gnosis Chain account. Move up one directory from ",(0,c.jsx)(t.code,{children:"Data DIR"})," to the ",(0,c.jsx)(t.code,{children:"Data"})," directory, and create a copy of the ",(0,c.jsx)(t.code,{children:"config.yaml"})," file and save it along with the other folders you just backed up:"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(96180).c+"",width:"903",height:"535"})}),"\n",(0,c.jsxs)(t.p,{children:["Alternatively you may open the ",(0,c.jsx)(t.code,{children:"config.yaml"})," and save the password as a text file along with the rest of your backup files:"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(18168).c+"",width:"1272",height:"641"})}),"\n",(0,c.jsx)(t.h2,{id:"restore-from-backup",children:"Restore from Backup"}),"\n",(0,c.jsxs)(t.p,{children:["To restore from backup, begin with a ",(0,c.jsx)(t.a,{href:"/docs/desktop/install",children:"new install"})," of Swarm Desktop. Once the installation process is finished, navigate to the ",(0,c.jsx)(t.code,{children:"Settings"})," tab in the app and copy the install file directory as indicated in the ",(0,c.jsx)(t.code,{children:"Data DIR"})," field:"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(78765).c+"",width:"2541",height:"1165"})}),"\n",(0,c.jsxs)(t.p,{children:["Before navigating to the directory you just copied, right click the Bee icon in the System tray and select ",(0,c.jsx)(t.code,{children:"Stop Bee"})," and then ",(0,c.jsx)(t.code,{children:"Quit"})," to close and exit from Swarm Desktop:"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(28420).c+"",width:"343",height:"502"})}),"\n",(0,c.jsxs)(t.p,{children:["Next open your file explorer and navigate to the directory you just copied. Delete any files present in the directory, and replace them with your own backup copies (excluding the ",(0,c.jsx)(t.code,{children:"config.yaml"})," / password file):"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(60336).c+"",width:"952",height:"495"})}),"\n",(0,c.jsxs)(t.p,{children:["Move up one directory from ",(0,c.jsx)(t.code,{children:"Data DIR"})," to ",(0,c.jsx)(t.code,{children:"Data"}),", and replace delete the ",(0,c.jsx)(t.code,{children:"config.yaml"})," file and replace it with the ",(0,c.jsx)(t.code,{children:"config.yaml"})," file from your backup."]}),"\n",(0,c.jsxs)(t.p,{children:["Alternatively if you have saved just the password and not the entire config file, open the default ",(0,c.jsx)(t.code,{children:"config.yaml"})," file in a text editor such as VS Code or a plain text editor:"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(96180).c+"",width:"903",height:"535"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(18168).c+"",width:"1272",height:"641"})}),"\n",(0,c.jsxs)(t.p,{children:["Replace the ",(0,c.jsx)(t.code,{children:"password"})," string with your own password which you saved from the ",(0,c.jsx)(t.code,{children:"config.yaml"})," backup."]}),"\n",(0,c.jsx)(t.p,{children:"Restart Swarm Desktop and check to see if the backup was restored successfully:"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:r(89556).c+"",width:"2543",height:"1178"})}),"\n",(0,c.jsx)(t.h3,{id:"restore-gnosis-chain-account",children:"Restore Gnosis Chain Account"}),"\n",(0,c.jsxs)(t.p,{children:["If you only wish to access your Gnosis Chain account, you can ",(0,c.jsx)(t.a,{href:"/docs/bee/working-with-bee/backups#metamask-import",children:"follow these instructions"})," for exporting to Metamask in order to access your account."]})]})}function l(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},78765:(e,t,r)=>{r.d(t,{c:()=>c});const c=r.p+"assets/images/backup1-8c46c0948fcd723ac14a532a1fb3adc8.png"},28420:(e,t,r)=>{r.d(t,{c:()=>c});const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAAH2CAMAAADzrz9hAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAG/UExURQAAAwIBBgQDCQUECgIAAgMCBwYFDRwcHCwsLCkqLQcFDQgGECkpKQkHEisrKwQDCAUEDAEABSUlJe0cJCoqKgcFDwUECygoKAAAASMjIycnJwkGFAMBBggHDwICBAoIFTxAQ0BAQCIiIiEhIf///9cAAB8fIAQDBgCC/Onr7gUECAsHFX9/f8kAAMPDww8PELu6u9AAAMAAAKDM7RMSHsnJybne7t7e3n274TXA8Pb09TMyM+fMpSkqgenp6Z8rLdy6gWdnavI8NHwqLQqG2Z2dn+jevSSc2Pn5+a6urjg4OW5xc+bqzykqpVac/Hl5ehUVFrh+Lcrq7M7Ozil+vFJSUvzBEhGHwsqiLAJ0zuXl5SgzO5OTk11aXkRERrSztCuj3omJiimi0BRah9HR0tfX1xcWIBJZl+A4N2Cx/aWlpexXTiAkLiQ9Ufnf3+t3ePGhpfS+vh2U0Ojq4dzq4UtLS6HJ3XivyQNvxhtGZ7U3Nih0mdzq7tfe0RkcJCtWbVCTuVCb19wgIBR2qQV24SmSxuGvFnpkIkFypvCOjJO7z0ZnfWAgIKwLC7uLjIFjfZ9bbWWy2bpiZgMDCacMDDIA6rUAACAASURBVHja7J1Jb1s5EsflRXLkZSzbYymJlzR6ABtKgPZBA40OEtpAMDnFQGz4IMxlAB/yBTroXPwZ5tJfeB4fH/UWcSmSVW8TC+i0LUvt1i+lf1WRxWLn06cPBfuU2gWzI5kdHBxkvpTaVWL7BusZbFCwHa1tG62b2HFiXU+7llnHnWvRik+pguv2tjvXY0ez53oB4nqeWNX+ug20LrJBuV4UTMX13GD7QMPl2u26ct1yNGyuRasHV3d/peaaVwE411rErdrowLqvplyPtGaKV0auPbMNJGYL1RR3aOKWnKvGU49c/VSwssBaCtfjkvxV+/mXcIXqas/BKLgWufCHtrZw9bXWXAelcd2i56qtBwA64BunquJaSty6MEUtc/1qilu10ddEB5rCFcNv4esC9Y9bIh9w1QHBVRX/68aVOn811VmqeKVyRd+4Jfv0f4zMtn4t8ivGHZp6S13CQn21yO8KKW5BuZrKLKhfYnLtdD58UK0PQHXgSmG49augus51OBxq2VahA9ZcAfEfIw+g4KqqV13rWCjXCKWWKzSvUjH11dePH+VcTVKA5Zcq3QBwxYpb+yVz3a6zvprXXQNX17gFWB8w6wDJerZeByBcqfQAGrdUOPXrrnh5QBFqDqCEKo9bcK5Y6663t9LM9Tp24qIOaLji7A54cnXYJVBx9PVTK64Wq9nQ3aye58Kr736WiaOrrqq4njArgasTXwt/rTtXk7766gAV16riFlQHbONW1fo6FMa5dl3jVilcNTpQN65QIaic6wXFLqzbuqsNV/Ye65QPrOnrhV0/FjRuFfdRUPtbuua+IcGxlHXXuCZghtU3RFW/4vUPltI/ZJtnHZSnr1Z9Q1HYsu3LJN1/sa0LjP2u1XAdInBF7R/y4Crvd/Vfx3bQV5AWmD7/2P4qdACn37V8feXU/LlS6Wtz41Y1/a7Yccs3f61rPkCjA9l+V9g+rLrftbDfXXjAdW/b11+Pke02MRXXGHon2+9qt1+4vl+A2zdEyNWzztJAXeUDFxeu+4VFZa0rV5r1wU5HzZXrQI24DsrgelwS14IMXLj2u67pa125ekqBQQayXHNk3ftdmxW3vPT11qyvVFxrHLe8IpcN103KB/zXXSH5ALx/SFPBKvpd7ajadLzDqLLn0PS7shVWdV0AW3815QNXSF1E+Fy3d3TVFvY+bD5u2XMt67wmAtcYK/bGlqnecq0LypozQMb12Ld/iIarzF8pzm0jcJX6m++5IhXTTmImHTDpKvV5eGquNPuFm8A1otcArkodqCnXnW35p9333KZKWhOsJ3z9VX8mPstY/2O/88Y21UDSOuR9/gVrv3B3NxextmIBtuCqMe9z3APLPrcdaH9LCeeKily585pPE4ivXefkoHM19LmUfZ5AcBUSsMsMxvWAmOswa8hcj6vhCtIBY+zC5PoRYLA+t3LOaRR1wILrEYBrz0cHbLjykzHu+35V66uB693er6f9Jtjhu3/s3dU4buX88/thv1E2+kbOVeirmEsm5Srpw8qEqG+jfuNsdLeFY175gK5vqHfTb6TtXZLmA/m4peaqXCd812+o/bpfub4eqM9tNhZrBLaMOtaWa2I3/QbbDUHfK46+/rPfaPuG35+Jw3XUbK6j22rXB1SF1fd+v/EOS5y/Cq42/a4Hh03nenhJ2vcq9ms7VvuER3f9xtsVXb9bLh/4YNOH8b35XL956aq2z0WvAzquN83nelM3ruzr0+ZzfeesA/r2ISNXXao1aj7XEWl/ZqbeslnL7rfALin7MzVcdfsCG871+hqRazZutYErdp9LrtklMpd8oA1cTwi4po0u5rglO8rdCh24vESpX4tcbeNW9ts2cGXhB3PeAJSrbjs7+Ku7Dmj6Mnut0NeTavRVHbd6gStC3JItbLdEBy6r0AEd5bbELZvIBV13zfHvmOc9b7q/gs6/RHaZWJGr8ThBry36aqew18B1LGG86rI4pxG4OnGF7MdWgGEyJ9CBS0QdKHK1XSd05Poyjuwe8Lw/HqM/F9MY4+zr71Kui+n96l+uwC8twfrqq4pp9pSm9ZtYTBmhh6cvn03PfHhaRn8+v8ZEM8waw1WQNcQtHK6J4yU8zB/42X9el4JxQ7nm9VXdl5ntZrd9DytALxHfyTzShPjT/vA0HkceHOGZxF+kfwWTOUPGnp08J/MqJK4nloHLNG+gkzsQV4xb631uOa49N67PPx7TLybjiMQsQhTTnnz5vJiOl9E39+lTHp4eZxHM6B/xnPRVVXE1zRvQ5wOm+a4HTuvazyL+RMBiSjGS2Zxj5EFqljgs+0nkqPHj6XPSV+HqwGVJcUt7T4nz/lbeX+eJXk5YihB9tjml2UoIvnyOfriYLrlz8+ekr8LiKkihzhvQcAUc1Tz31FfB9T6rliuuzz/+N13GgsqefJ+LW4hcXfzVRwcM9ZaTvgpoKQhGOvvJz3B9ePqNycbLVyYPq0dXr+LfxQ/HHwMvfT0pq94i4prNXyesPJhE3z+/Rl88zItc+5N/sS+jRGDZXz0nfRX3afYw1+WmcsXQAYaN6eSSe14kmjGg59dYOotcX+K6jP9ViOdkXpU4tSjfPHXgEqtvQPDM6yuk7zWtDupV6bvGLbvApYpaxXMKufjWAa6+njvWWzXk6uCvUo9V6QXXAbUCSOS11wauJ5YCC9XV3cQCV1quoLPw57yUbcs+jK0O6OqBIleuBSXqa0u5Sv3awl83l6tpfXCNq1Zf264DULCqJcKTglAX8wHNnIFc2GJk27JviBG3hLKK9de3b/X5QOAK5ZqNWoyvWz7QFq62OmDef5HrgOmekqPVPVDt4Nq1LGSxuMprhOCvEq5W9daG6OtJ2XVs4AqPWy7rA0EHYHELuj4gm0sutro3KW5ZzRvIWMrVOJfcuX+gyf4K3YeV92kYx2efx1QHg2Gvt1n6Ct3X6kjNuF8YuDpxNSevTAd6G6gDKFw16688bAV9tdNXc60VuHrFLWA+8EvDDU8HoFxN92uFuCWfN/A2saK+Bq5+5zZVcQtw32Yv5AOGc/GSuKVcd02sbVyhdawfV3PcCv7qogMhbtHoa+BKzTXogJ8OhLilj1u28wby664hz7r0nJcn34el0tczYqPXVw7VPI9Uvv9CwPWsPGsSV835WDPXs9KNVAdszr/IuaLoK+rnFCw0lPp6i6evxfu2M/dDG7iWhRTnN1bNVXblm/pNlh7WnX9rWfmA6v7HDFkt10qoJr+YIm5B5w3k5r3urtdbCFwrykTdfjMsH7CNWzZ1LCwfaBpXmL5C5o7odUA9j6idXH3rWNe4FfwVI39V11lt5QqJW4FrfbkGHXCbN5CbmweMW7L1AdV5w7bFLdO9kMW4ZrVfIFnPcuM6G6dTxRQWj8AwPKdEfwXdt6mpE7hJdFWxTujENZ5z8/Mxnkek5rrMTXqsmb5K79nLmMpfKbmycWSxGbmuntkarqaZDn5c+RgsNmUsIruY8hk6i+n9LB2GE3PlE8wmiSDMxKydGupAds6AWgck90Qf5cl66cDLeJ7668PTnE9qivhmhjcxrnw0EZuowebAshFFz6/LJuurfi5pft3FJW5FQWkuuPKJTjM28DE7bCyOW+zn8TTDiDDXBPPYkgZy3cfiyrBFuGKufDZeRI97pxjmyHUgcs94tPF4fM9GZ0VWM65CX9PHdfoq3ScsWkx1GJnTu0sGZeq5Mvd8SSaUPQNzgzrHLThXV3/lyAo6wIiKYZsrrvkH6sa1GLds84FzzDwrnuIafcRjZEncYlFqzP5I3HOlA/yRP3/nEe3nY5P1db2GReW6KqUm42S2M/suilvTdAB0+qQ4D7tP8rI5kb/61rGucUvF1Vlf5Ypb23UXKn1tO9eq4lbgSlPHYurr5upAdsoAt3Wu7Nixet5bW9ZfbecNwOJW2uXSdq4qfzXtFxZ1QuWpeX1NiwAVV0R9reX+lnA+0H3xGgUIXH25ys5vruvApnBV6gBwHxbmr5Iuwqbo6xm+vkL6M+3qLUl3ZmoDA9dKyGL3aUL7M2257qtNy7V/VgXZszMCrtcU+YCK7DCxnch077E8tH6d8LK4lV2vNvW92uYDGo+N/HUwVMWt3DslBYzzW4pcu127/iH7uLVvMN05o8Ych1HqgO3cET3X4rQ8V66lsvXy+rU6loSr2l97q90Xsw6UAhhJTWT+qtOB4v2FvvrqwbXWpq23JCbm4mBxFWlAErg2lqubv6p1IMO1Vf4q0QECrunKqzZgafYLmmbFuKVad1XdryWfN7DuryqoGX1tFdeivzrd/6KsX1N9FcOIVVyZtVlfVeuD+jnPJrPl2vz5hDKuHXSu5kqrbf4q0YEYLQVXQ63Ven29RddXQDYQuLpzDfkAMtd1nlcJ1cGAlwMbkQ9Y369lMgXXXt42k6vufi1z3FJx3ZR8wO88vLqO3TSuxTqWhqvaX9uqAxb+Cji3ra63gr76nIcPXF3iljvXoANu92uZDLJb2C6ubKNQxC3IfBy7dVd1/tp2rt1u6q+295REr7qGOez6+qBspbBNXMUn29SJkZ/zvAvbfglcnbn660A7uQodMHEVOoDPte366nMPVOAauNZLB4rzsfC4bnDcWpvvGuIWBld5f0vg6qsD5nugAldVHVsW18w+YfBX6z63krnOxFCMNuhr4Bq4Vrf+SstVOtcJr59QcBWTCePRg3/898dj/IjLcFJ/fY2LLN/7terBdTWZMJ5H+vAUAWVj8n5WwfUWeO5F+LVdHqDm2pOYL9fVRDI+cuz5xyPSKBIHE5Sg+4UdJyuH62qCHh+Rx6aUvYwdJukGrkauTGkrIWs77x2LK4W+rnSAT3V94QELOocQWV9vy9BXSBWLFreWfJgui1uL3z7XnKsgW0+u8STX5WoyYTx68Ou/WdwCjXquQAewuQ4SQ9VXuYmBpP06ck3Z+Oir3k+JuFZahVUVt2i5/vnIhpkv+/Xl2oi6QC64VWJtKdfqDXq+uFk6ELgGroErJVff/FWcPPTmWqdhLhZci/MGhNUif63lpBw7rsV8wI1r/jyRymBc6zuDCML1RGFVc0VmQUa2YVwJKNCAhZ7T8OOKpq8kvkUBFqqvQmGr5UoVZsrn6tY3ZO4fcObabzZXv35Xlb72eoFr2ofxNmN+/hq4Zrl2vC3oAI0OBK60+hq4up0vDlwD13pwxckHAldsrj2AMa7bkbWRq6rf1TViBa6muW5++lo+14lFWwY9V9X6Vc25xpdu3weuuFwXU34P7xrJF9I7uKvnSqyvM45vMZ3XliuNvtJyfXi6X2FcTFn7EGt5m8zji6JBZANX2ftfNWQ+vy5zXFvvrzB9ZTWBF9eHp9py7ZBYSVzjk0X15IqzT+imA65clfraAB0owV+Hrlyz+QA/CTcJXDG4LqaM38MTy18Z45dxwhV6xICOK27/YLn62hcnYhhXdgRmLnQgyrQqzrMazjXRWdez203lShu36ryepeDaKUtfxf2xbeOa73e1ne8auJq42tyyScB156+/jo+17/+MBisVV/lUcrcpZM5cd4bf9t6dnvZLBkvxHz2N7P370ejw8PDvzP6W2BuZHd7c3dJx3dm+O33P/n9MDFApEDUWW3GNbHS3S8R1Z2dv9N7ItY/Xvk7aCG/L9c2bvWsartt7IwhXggMGFJHQnuubPRKuO3eHowgsgCsyWpIEg3MdWXF9c0fBdf+9BVcUun1K+z979/+TtrrHATzRLVTTdKZphiXZMqHgjoECG5xtkLg0R3IL/lASx3YUCiMQ8OCX6U2YerxR73a2Mze3ZDfnD75PWwqlFJ6HL4V269vp+EG0vnzv8zwtDkdxda9O3nU+iw/tauWM4jp8YeGuc96Oq9v+rO6RXAOTc1V/D9+cW3GVYD32d/W0lq3hXMlbk3fFHVeMmLTrkuyKI2607DJelW0WrmUd7IqZ4Ep1XGn7u9J9tq+zdcUd17Fcl9q5e4fCOxsC8kcYA4bbgdm62r2wOD1T1yUj1x+hsCTZbzswY1fa1lstDz1T16Ue1/ZGy9aTQGHt2mZN3fWu3tX+sG66awxM3VU5z+rrSpN2baulXSVYG15/wckWq96VamWw7riuS/poXdXC0l7SbsOA9NLtuna5PuA2NeEyxPRcewsr09rlKgw4bK98yAZ1JR58fvz57WPw0srnzJRcl7SuWlia9mXDq8vLYfmNywcSgMQrPXKMU/jN8z9Bnj+HvX8AfEyaznCFHBVAySODeL3e1uGSRnX98vbtSYJXSOWI+HRdtYVtNda1KP3/0XB4TXWF0JIZkRNzIOKfcn6DQuEZkKIoFN0juoYe6Vg7dZVdsS9PnwLXp0/fngDTk88nJ19m4to1CVxrkuu9bDYcdgV8sAQwMZVKl6R8+5/c1xvYXbzNYFAAfwo5wocSABmJRFhWJmXB36FQSGXtqavsiquu/K8ncq5Eq7jeXwu7EFh9rmZB/qLZCBuRYH+7oWF3oYuCIASFzXKO8nmTGIngyqpNBTdYwBqiB7q6v3z/fpXgvz/lfzm5knPpnp6rOmA7g0CWVVyXb91z+bxKBvaVK7FqIt++fRM9kG+Gp9kUBWFTELigmGtmNrkiSaO5hh6FZFO240pqx0BnvOJnrz68AK4nfEJCPT+vHMzCtXvCusKrtwDratjlhSeACQC0VAKNjZQk4WAyMPgeGCCV58BmeVMINgsFIVccfI+Q7BoCrIprXO+qtFXjunD26tX7BH/1Xz7x6Srxn3pl8q69ovNyVNdWYTuwAZcrvHbr1lo4C8YA1BWMASAaFFIsmxLKQLfQhHw7MsGykmAK3MoVSqVUEOIKPEFUUulNVNfWdl3Vvr5/r3GtzN7Vmw1LomDJAjfuZQPtOdbPlWvE2cIKnYuzOd9Kio03OIgrJw/X9p9GqVEWoa6qqeIajUa1rL2ubsn10xV4/VSvnFem7aodBIqsVNXl1UWwZIUXV5dBaV304LiEUpxtrJBiPC7SxTQbLwmQuzTSXSmVxWJy8D1CHVjJNbqluGpUdWOAoi72O7kAiYWn7oprXcP35SVrLZtdlJ8JZTUMcw1G4mykLKTi8YI0B+JsebArCd5HmwYHUe1ylUgVV5LUu3bqSuEusK2uVpvNajzZrFYD4fCMXFXYe8qTyqyGs8qmYPkeiivYuwIsaeGKxCNBWF+1rmA0r5BQ16iSLYU0WgWvvawaV4LKulxuns/l+PVMjud903bVF9bTcl1ru0L7yjVAXTeDqXQ6VRbKJTbFQVyDpfhW+yVSKOIwVrpVUdW0GvX7/QPrKruSHdfA7FxbsD19DUO/6pXNRimHUwRB4bl0YxNav2IhstVKPB0sEiSS61a1Kne2Wq36/VpXg7pKrtksrbgmZ+eqgc0uSgP2vrRu3VcGLeyL9nqSxSbW2po2i0mPF3IHIhdMs/IIaJS5IkXTKK5y/NKLX371D2JVXF1P+FyTf0Lm+J3spF2XjKJ11RRWhg2A3ZW0HQAbKLAhAOMgQEL75A0EVMvOrQHBmlywUCiUBa6ZJGkUVwk02gJtRc/aVVeCcAHYZKlYLGXCxVISsGap6brqJoGHBLISJklLN1yaZXeCcSczmUwSIxE/ehszqnf1GNeVIDwuqaOdZMlJXn9dGuRKUEaTQFq8SA9pfob5HP6eeNqqGlZc88gL5W71WAmFTdu1B3YaqON+Twaxdh4yhDxmOLLr0mDXrsJqZqwdZLtUW6y4ntVM17tQV21hVViPPVTVf+oj13Uk167HtY1cu2G7GmttWY+nb1uHq6u5rt2wbVlr2naOzm3EOlxdh3btp9nJHaIvrEbWSrrdR+WGsc7StR+sntZq6RzneKymuephce2mz+qmbVUjVou4tmG7ZC2Gqzs0XM86dF3NczWA1ctaNPhA1pm7dmA1srh9UDuqI7Ca6WoMa2HbroOkxmI11bW/rLV8DQ6tj6pVXDWwxrTWDDU2q9muXbD2oO0+4hFZTXfVy1rbVn+sxKisZrhiBETWkrgGB0mMzmqKaw+skazlQ4zDao5rLyxhd9QhWU1yNYC1ka3hwWOWcDWGtQNtnwPHpuY63ydr6lOc9I+tREdRNcP1DgaHtYQz+vFhVnC9rXlWnh8iGGY11x9BFsOs6Gp3WQyzjOud3ifp+tlQx3Cdn0d3tSUtNl6m5GozWmzsTNh1bm7u9sDn7fsJSKfuyqhB98Xyl+eVyzzS+978E9L+gLA/GvrnBmHvnK//9RDkr3oe1YyiL2qxWO2Cpqa2bg121f2NkPNnz579e2OjgvK+X0P6H2YNfYXf60BWlWUPkA4JB6qAFcACWdwarkz7LUIyl19eA9ZnGyCvLg+gdQr1/pRwCPpJ8jLrHwosSmNxXy22X+SCQa64H6v53Lbr6zM1G//aUAK5A3B8t/dGyd47eRJEoZ+lIosyCmwFibWW4VLVRKKa4jK1mg+3r+sGsuvu9SGfOAQ5fiPD+qGfZVtxVWC34UdFA9bCjrJM7BSStRo9c9d0e91Kj+ZKQF39u8eJ46Pr6+PDQ6Wx0DHwsNVXBRY6CKiLWKawzitfBr9eyMQuqFm7Mga3UF0PNrZR+iq5Hu2+e7d3dPgGxZU4A5i//vGQeajAnsHrus/t8HxEEEUhwvM73H6fwg7rOj8o8q/cmbTra8Bax+obG9tortcAdO8YzVUer4BUdYUO2ItaMcUwEW4/FtvnIgyTKtYuTHYFVTW67jKm62u5r3ksDwqL5nr8Zm/v6PhoF2W+EnV5N8Coc6AOO6hajKsyjLAv7bP2BYapcrGa+a5yJuW6raZeP8N+x87qdTRXad1KoK5bsqsM+xDJNRYLJhhGBJvXhYV9jmF+CcZi9nJdeN9xzf/98u98/QzN9fDo6Oj48Bht3RrZdaG6ngYTYUcw3VWVnZArcSajnp5uA9CPLz9iZweI69be7i5Yt47QXYeeA5v7sYV1Zv0Jw7DiFFznJzlfifypxApgpbq+BIVdQF+3/G8Sh7umrlsLbILheb7wwG6uUmFPJdZTqa7LoLAYYl/BPmv3GtFV2mc9HmGfJeaFKs8nEtLGYBqu6HOgUYS5UvVTOVJdl0FhEV1b5wVIc4AY9bygKi6Asy5p/2qa65wuCK474OQL4ZyLqEisFVBXyfUjhr4fODy+3jXrPPZCOo/ln4jNFM/wca5mmf2AgKWRWMGeoNKqq+QKLaxfc+FlT2GFuw573WXBB2C5VHU9InIlhkmURJNc54Z2TaOySvNPqascWGGjU7lO6G5dJxQeJMVyubxZNMVVPckaav+a3kFlxai8XFe5r7DCfu2BjZpxXXtBva6txgTXuWFc0+2rWcIwjxSpdYUW9kb/gEHo6w3Cxx/1cRgTXeeMchtz4rha0VVxRJ4DjutQ+yzp93Frq+u4Tmz/6syBWZ5vOa6OqzXmwLzjasK61bqM5bhOuK/OHDDF9TaI4zo517k+cVwdV2ef9fO43m3FcXX66sxXx9VxdeaAlV3vtuO4mtRXZw5M0LXLUHcO67g6rlZ2deaASfsBx9UUV6evZrg6c2Dy87V3vXJcx++rs26Zcr7lXB+wlmszFd9KDnV4B5fnL16cXx78JHNg0Cjo65pjd6qpFQwTAS3a06jkzz+8lvPh/+3d/UvbWhgH8G6zJEKo3CGoFxmUHVo6QgwMjaSQUSGYpuAdNwQha906GxCLdyLsh82Bt4yB4/7gdv/ie16a9TVvtfE26fN12qTVmn58+pxz4suu3yyD60zrgobrtk+wqN3BrrUIh1a46atS2Rtw9WFVKObHjoZdrUb4oQ2zpg72oeYDtutSVlPSsGtBd+3QJvDtkOQd+YffHH57k2VX78RrXNe32jm5qGJWDddqdVcKO7Lrw7FcZ9OV/u/Ps/YBW3NIuRb+cJgr33Y+hswEvv0Cffdzb58U7EWGXR8/nul8lq5ZJukCu5rmUFdb0UO669Uhe+m9/ILQS7J5A67j6WgSmbgWXVyuGqncj+5u4HEJ11ckhz/31MoeQvtk5zrrfSD+uKVpu9QV16vbJFuFViekvRLJ/T0Dfdnfu/z+74+7vzPuOv7zrpFcHU0p0lmWtXtC/zohNg48rlXs+h4Xqrrfk7oHJGd3Ga/XWfoArlPWT02TL1zc3t6GjkGnV8dX73/u93p/MtbuwVkr067TvqcVYdzSOt4fHLjpHR0d9W7DVgXHx1fkpXdJWT/81T34DOPWxBkXPFxJJptAEVackNH94usxyw/q+v0Sly24TgSvBxyLrLGEW8Z61As+OVA9HXE9yLjrrN+PtckMy6m3+ILnehS2jv26TK6TP+8a+bwLXhFobwuFaPWK84nB3nUvu9+p6xnU63RYPHiZ/MVRpP76C/a6+6H7AQ9cBwevoL9ObQVvcScQeZ4V7G34sRXenBLZuzPWCT5XwdVHVu+Q5QGeEfT+iXZ4F59OT09bn8my4FWaWB+wDwxlnV9djXZ4hSlbS+q6zUOS6APgOotr8BoWXMEV+gC4giu4giu4giu4gmsKU0jAVQBW/mkC57O2gJUv5ebuWn4NrPzO/F3XnqwvPetGOQHX8g6Uay4B17V8aclZuZWonl6ijFv5/Ivlhi2Vc8m45h/tLO9kS9hZySXlmt9+8bq0jMOXUNopx+mrMVzXWMrbj5LNs5D8NpaVkWxuriSSmONVfFff5OeUMo2/q9/XIbcgWWjXZ/FdF8N2c3Om/oqTlOeQa6Q+ML1vpMmV/GwBngv4xPOYR28lXoGoUx9J3A64MPX6ZFCt/rmvqXcPYazj41Yul1pXypp0X/US5pqpcSuC69p9s3yu+YfKLH0g/gwzXa4PsS7Ilis2A9e5uz6hc6wHawOZd4053Nx73CqXg1ew/ento9H17iALNsMKdQ1wm/c6K3Ch5bn69Yu0uj5IX8XHF+aaiuf/PVzXEnDNZc61CEkiOQ6SRMAVXMEVsoiuJYGvBoYXwDV+nlf5ghCYAl99Dq5xwGU4IQAAAtdJREFUw68LoVnnwTVmtoQoWd8C13j5PZKr8BRc4yUa67oArkm4CuAKruAKruAKruAKruAKruAKrv+3q22B6xyim2NXWAq4BqYtS5LcDnsvxxmFtRG4BqTlGkh1HBUZbmva7TWVPt1tznSc0XJFjihytshigutwilinXqRbdQdZxSmsKilLXa1xpiqPlCtOhZMRi6pn1VWkj4/Dj1Rnu/Stix+yK/qyasaQh25oxclqlenTXamYGNccLlccnfOuqSM7Xa6txmC70Qp0Jc9H4kofPnXVkdUUm5boy0oh65bjWPpg3zN1FQU3AexqNVmxVoa+CDXRwuXaVFgkzpHT5dpB597mOeoEurJLWalI/V0R6YGfSFExY90wFElSDKNOYIfGooory3Vyf5xUwRf4VXIHt8o2eWJU+m0AcUrKXBuGB3uOjEYkVxHV2K4bPGJzSgO/D5JYf5UQVmsMfQQS+/fHmaiJ+6mNG8HwrVhaRwNXpEqp6q8e7ATrtD5Qow6Ww1xRnVwvirb/55KMhrfZMEZhBq60GPGu96Vjt9abg3Ilrgila9xisJOs08YthdWXWmeuRAZfK/vPB0inaGMTRyfduBjHlQxWaXalsFNYffsAfsCqSV1Ze1XkgOkr6QRWu22RLtDyqddffaAyfKtoIZTiPsBgp7AGuHKKRXYdK9SVVCntBI2JMS543ML9FY24pmzc6sNOYQ1yrSEZEbJaBFd8q0xex12D51moWVMGSd88i+XkJMK6gK0n2TxeUgmzq0qiWFflkE8o+7bggHWBMzIapm5dEHO9JfZdzQotX7w4RY5kzuzqv441leE2kOF17H0i+1d0jQ1Hk+dd8IprKHDeZdaMnycMC7hGSzMeK7gmFHAFV3AFV3AFV3AFV3AFV3AFV/g9o2Vxhd+LSybwe5wJZSOK6wYHrjFTigC7UQLXGVrB05DeuuBNgIO/QwKu4AoBV3BNV/4DuEXajvy/CzEAAAAASUVORK5CYII="},96180:(e,t,r)=>{r.d(t,{c:()=>c});const c=r.p+"assets/images/backup4-40da9b86893f41f63c20c9dcbb917526.png"},18168:(e,t,r)=>{r.d(t,{c:()=>c});const c=r.p+"assets/images/backup5-9c88ce1dbc31bf5bc605e483f7c4160e.png"},89556:(e,t,r)=>{r.d(t,{c:()=>c});const c=r.p+"assets/images/backup6-2caa0591dcad44acdff485634fda84b7.png"},60336:(e,t,r)=>{r.d(t,{c:()=>c});const c=r.p+"assets/images/backup7-8f0717caefd9eb5cc4c4ffa5d2d7ddbe.png"},60493:(e,t,r)=>{r.d(t,{c:()=>c});const c=r.p+"assets/images/backup8-df2d8e580989ba3b39e7f0739ef25b5b.png"},71772:(e,t,r)=>{r.d(t,{c:()=>c});const c=r.p+"assets/images/backup9-30966c174373efbcd85466d5a2d2f565.png"},4552:(e,t,r)=>{r.d(t,{I:()=>d,M:()=>a});var c=r(11504);const n={},s=c.createContext(n);function a(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);