import logo from './logo.svg';
import './App.css';
import OrgTree from './orgtree';

const horizontal = false; // true：横向  false：纵向
const collapsable = true; // true：可折叠 false：不可折叠 
const expandAll = true; // true: 全部展开 false：全部折叠 

const data = {
    id: 0,
    label: '维生集团',
    empname: '杨文元',
    job: '董事长',
    prepared: 200,
    onduty: 168,
    children: [{
        id: 1,
        label: '技术部',
        empname: '杨文元',
        job: '董事长',
        prepared: 200,
        onduty: 168,
        children: [{
            id: 4,
            label: '后端工程师',
            empname: '杨文元',
            job: '董事长',
            prepared: 200,
            onduty: 168,
        }, {
            id: 5,
            label: '前端工程师',
            empname: '杨文元',
            job: '董事长',
            prepared: 200,
            onduty: 168,
        }, {
            id: 6,
            label: '运维工程师',
            empname: '杨文元',
            job: '董事长',
            prepared: 200,
            onduty: 168,
        }]
    }, {
        id: 2,
        label: '人事部',
        empname: '杨文元',
        job: '董事长',
        prepared: 200,
        onduty: 168,
    }, {
        id: 3,
        label: '销售部',
        empname: '杨文元',
        job: '董事长',
        prepared: 200,
        onduty: 168,
    }]
}

function App() {
  return (
    <div className="App">
     <OrgTree
          data={data}
          horizontal={horizontal}
          collapsable={collapsable}
          expandAll={expandAll}
      />
    </div>
  );
}




export default App;
