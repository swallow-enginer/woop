import React, {useContext} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import { useRouter } from 'next/router'
import lodash from 'lodash';

export default function Content() {
  const router = useRouter()
  const {index} = lodash.isEmpty(router) ? 0 : router.query
  const message = [
    {
      title : "願望",
      description : "願望を書いてください",
    },
    {
      title : "メリット",
      description : "メリットを書いてください",
    }
  ]

  function isFirst() {
    return index == 0;
  }

  function backPage(e) {
    e.preventDefault()
    router.push({ pathname: '/'})
    return
  }

  function getNextButton() {
      return index == value_len - 1 ? "完了" : "次へ";
  }
  
  function getPlaceHolder() {
    return message[index].title + "を入力する";
  }

  // function changeHandler(e) {
  //   row.input = e.target.value;
  //   value_list.row[index] = row;
  //   // setValueList(value_list);
  // }

  function nextPage(e) {
    e.preventDefault()
    router.push({ pathname: '/'})
  }

  return <div>aa</div>

  // return (
  //   <div>
  //     <Grid 
  //       container 
  //       justify="center"
  //       spacing={2}>

  //     {/* タイトル */}
  //     <Grid item xs={8}>
  //       <Typography 
  //         variant="h4"
  //         align="center">
  //         {message[index].title}
  //       </Typography>
  //     </Grid>

  //     {/* 説明 */}
  //     <Grid item xs={8}>
  //       <Typography>
  //         {message[index].description}
  //       </Typography>
  //     </Grid>

  //     {/* 入力項目 */}
  //     <Grid 
  //       item xs={8}
  //       align="center">
  //       <TextField
  //         fullWidth
  //         value="test"
  //         name="content"
  //         // onChange="changeHandler"
  //         placeholder={getPlaceHolder()}
  //         variant="outlined"
  //       />
  //     </Grid>
      
  //     <Grid 
  //       item xs={8} 
  //       align="center">
  //       <Button
  //         disabled={isFirst()}
  //         onClick={backPage}
  //       >
  //         戻る
  //       </Button>

  //       <Button
  //         color="primary"
  //         variant="contained"
  //         onClick={nextPage}
  //       >
  //         {getNextButton()}
  //       </Button>
  //       <Link href="/about"><a>aa</a></Link>
  //       </Grid>
  //     </Grid>
  //   </div>
  // );
}
