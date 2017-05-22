
'use strict'
import { observable,action } from 'mobx'

// 点击次数
class orderStore {

  @observable todos = [{
	    title: "完成 Mobx 翻译1",
	    done: false,
	},{
	    title: "完成 Mobx 翻译2",
	    done: false,
	}];;
  @action changeTodoTitle = (index,title)=>{
    this.todos[index].title = title
  }

  /*constructor(){
    this.todos = [{
	    title: "完成 Mobx 翻译1",
	    done: false,
	},{
	    title: "完成 Mobx 翻译2",
	    done: false,
	}];
  }*/
}
const order = new orderStore()

export default order;