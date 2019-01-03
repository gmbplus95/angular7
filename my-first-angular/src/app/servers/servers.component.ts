import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //element
  // selector: '[app-servers]',  //attribute
  // selector: '.app-servers', // class
  templateUrl: './servers.component.html',
  // template:`
  //   <p>Ahihi</p>
  // `,
  styleUrls: ['./servers.component.css']
  // styles:['']
})
export class ServersComponent {
  serverId : number =10;
  serverStatus :string = 'Offline';
  btnLable = 'Turn On Server';
  isDisable = true;
  serverName ='';
  getServerStatus(){
    return this.serverStatus;
  }
  getBtnLable(){
    return this.btnLable;
  }

  check(){
    setTimeout(() => {
      this.isDisable= false;
    }, 2000);
  }
  onToggleServer(){
    if(this.serverStatus == 'Online' ){
      this.serverStatus = 'Offline';
    }
    else this.serverStatus = 'Online';
    if(this.btnLable == 'Turn On Server'){
      this.btnLable = 'Turn Off Server';
    }
    else this.btnLable = 'Turn On Server';
  }
  onGetServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
 
