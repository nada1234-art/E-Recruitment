// import React, { Component } from 'react'
// import axios from 'axios'
// class SearchBar extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       Profile: [],
//     }
//     this.cancelToken = ''
//     this.getVal = this.getVal.bind(this)
//     this.node = React.createRef()
//   }
//   componentDidMount() {
//     document.addEventListener('mousedown', this.getVal)
//   }
//   componentWillUnmount() {
//     document.removeEventListener('mousedown', this.getVal)
//   }
//   getVal = (e) => {
//     if (this.node.current.contains(e.target)) {
//       return
//     }
//     this.setState({
//       userList: [],
//     })
//   }
//   onChange = async (e) => {
//     if (this.cancelToken) {
//       this.cancelToken.cancel()
//     }
//     this.cancelToken = axios.CancelToken.source()
//     await axios
//       .get('https://jsonplaceholder.typicode.com/users', {
//         cancelToken: this.cancelToken.token,
//       })
//       .then((res) => {
//         this.setState({
//           Profile: res.data,
//         })
//       })
//       .catch((e) => {
//         if (axios.isCancel(e) || e) {
//           console.log('Data not found.')
//         }
//       })
//     let stringKwd = e.target.value.toLowerCase()
//     let filterData = this.state.Profile.filter((item) => {
//       return item.username.toLowerCase().indexOf(stringKwd) !== -1
//     })
//     this.setState({
//       Profile: filterData,
//     })
//   }
//   render() {
//     return (
//       <>
//         <h2>Search..</h2>
//         <div className="input-group mt-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Find ..."
//             ref={this.node}
//             onClick={this.getVal}
//             onChange={this.onChange}
//           />
//         </div>
//         <div className="list-group">
//           {this.state.Profile.map((item) => {
//             return (
//               <a
//                 className="list-group-item list-group-item-action"
//                 key={item.id}
//               >
//                 {item.name}
//               </a>
//             )
//           })}
//         </div>
//       </>
//     )
//   }
// }
// export default SearchBar;
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
  
const SearchBar = () => {
  
  const [myOptions, setMyOptions] = useState([])
  
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
  
    fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].employee_name)
      }
      setMyOptions(myOptions)
    })
  }
  
  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <h3>Search ...</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Tap a keyword"
          />
        )}
      />
    </div>
  );
}
  
export default SearchBar