import {Page, Alert, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    list : any;
    
    arr : any[];
    constructor(public nav : NavController){
        this.arr = [];
        this.nav = nav;
    }
    
    addtask(){
        var prompt = Alert.create({
            title : 'Add Task',
            message: 'Type Task Here to add to the list',
            inputs :[
                {
                    name: 'task',
                }
            ],
            buttons : [
                {
                    text : 'Cancel',
                    handler : data =>{
                        console.log(data);
                    }
                },
                {
                    text : 'Save',
                    handler : data => {
                        // var obj = {
                        //     task : JSON.stringify(data),
                        //     id: Date.now()
                        // }
                       
                      this.arr.push(data); 
                    }
                }
            ]
        });
        
        this.nav.present(prompt);
    }
    
    update(value){
        
        var edit = Alert.create({
            title : 'Edit Task',
            message: 'Edit Your Task Here',
            inputs :[
                {
                    name: 'task',
                    placeholder : value
                }
            ],
            buttons : [
                {
                    text : 'Cancel',
                    handler : data =>{
                        console.log(value);
                        
                    }
                },
                {
                    text : 'Save',
                    handler : data => {
                       //take value "data""
                       //identify where to put //identify by id
                       //replace the content //replace method of ar       
                       for(var i = 0; i < this.arr.length; i++){
                        if(this.arr[i].task == value){
                            //
                            this.arr[i].task = JSON.stringify(data.task);                
                            break;
                        }
                        
                     }
                    
                  }
                }
            ]
        });
        
        this.nav.present(edit);
    }
        
    
    delete(vale){
        
        console.log(vale)
        
        for(var i = 0; i < this.arr.length; i++){
                        if(this.arr[i].task == vale){
                            this.arr.splice(i, 1);                
                            break;
                        }
    }
    }
}
