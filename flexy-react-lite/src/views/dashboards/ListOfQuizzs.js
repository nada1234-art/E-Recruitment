import React, { useEffect, useState } from "react";
import QuizzService from "../../service/quizzService";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@material-ui/core";
import Swal from "sweetalert2"
import { Radio } from 'antd';
import { Select, Space } from 'antd';


const ListOfQuizzs = () => {
  const [obj, setObj] = useState("")
  const [description, setDescription] = useState("")
  const [ListOfQuestions, setListOfQuestions] = useState([])
  const [correctAnswer, setcorrectAnswer] = useState("")
  const [quizzs, setQuizzs] = useState([])
  // const [checked, setChecked] = React.useState(true);
  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  const [value, setValue] = useState();
  const [value1, setValue1] = useState();

  // const onChange = (e) => {
  //   console.log('radio checked', e.target.value);
  //   setValue(e.target.value);
  // };
  // const onChange1 = (e) => {
  //   console.log('radio checked', e.target.value);
  //   setValue1(e.target.value);
  // };
  const options = [
    { id: 1, name: "Option1" },
    { id: 2, name: "Option2" },
    { id: 3, name: "Option3" }
  ];
  const [checkedList, setCheckedList] = useState(options);
  const changeList = (id, checked) => { };
  

  const qs = new QuizzService()

  useEffect(() => {
    return getAllQuizzsFromBack()
  }, [])

  const getAllQuizzsFromBack = (() => {
    //nous allons importer les services à partir de categoryService
    qs.GetAll().then((res) => {


      console.log("*****list of categories***", res.data.data)
      setQuizzs(res.data.data);
      if (res.data.data) {
        setListOfQuestions(res.data.data.ListOfQuestions)
        // setcorrectAnswer(res.data.data.ListOfQuestions.correctAnswer)
      }

      // console.log("*****list of categories***",res.data.data.ListOfQuestions)
    })
  })
  return (
    <div>
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Quizzs
            </Typography>
          </TableCell>
          {/* <TableCell>
            <Typography color="textSecondary" variant="h6">
              Questions
            </Typography>
          </TableCell> */}
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Questions
            </Typography>
          </TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {quizzs.map((qz) => (
          <TableRow key={qz._id}>

            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {qz.description}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {qz.textQuestion}
              </Typography>
            </TableCell>



            <TableCell>
              {qz.ListOfQuestions.map((QT, index) => (

                <TableRow key={QT._id}>


                  <TableCell>  {QT.textQuestion}</TableCell>
                 
                  {/* tablerow */}
                  <form>
                    {qz.ListOfQuestions.map(({ _id, ListOfQuestions, checked }) => (
                      <label key={_id}>
                        <input
                          type="radio"
                          name="options"
                          value={_id}
                          checked={checked}
                          onChange={(e) => changeList(_id, e.target.checked)}
                        />
                        {ListOfQuestions}
                      </label>
                    ))}
                  </form>


                </TableRow>

              ))}

            </TableCell>


           
          </TableRow>
        ))}
      </TableBody>
    </Table>
   
    </div>
  );
}
export default ListOfQuizzs;