import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {woop} from './../App'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    
  },
  description: {
    
  },
  back_button: {

  },
  next_button: {

  }
}));

export default function Content() {
  const classes = useStyles();
  const value_list = useContext(woop);
  const index = value_list.index;
  const row = value_list.row[index];        //1行分のデータ
  const value_len = value_list.row.length;  //最大完了
  const router = useRouter()

  function isFirst() {
    return index == 0;
  }

  function backPage(e) {
    e.preventDefault()
    router.push({ pathname: '/'})
  }

  function getNextButton() {
      return index == value_len - 1 ? "完了" : "次へ";
  }
  
  function getPlaceHolder() {
    return row.title + "を入力する";
  }

  function changeHandler(e) {
    row.input = e.target.value;
    value_list.row[index] = row;
    // setValueList(value_list);
  }

  function nextPage(e) {
    e.preventDefault()
    router.push({ pathname: '/'})
  }

  return (
    <div className={classes.root}>
      <Grid 
        container 
        justify="center"
        spacing={2}>

      {/* タイトル */}
      <Grid item xs={8}>
        <Typography 
          variant="h4"
          align="center">
          {row.title}
        </Typography>
      </Grid>

      {/* 説明 */}
      <Grid item xs={8}>
        <Typography>
          {row.description}
        </Typography>
      </Grid>

      {/* 入力項目 */}
      <Grid 
        item xs={8}
        align="center">
        <TextField
          fullWidth
          value={row.input}
          name="content"
          onChange="changeHandler"
          placeholder={getPlaceHolder()}
          variant="outlined"
        />
      </Grid>
      
      <Grid 
        item xs={8} 
        align="center">
        <Button
          disabled={isFirst()}
          onClick={backPage}
        >
          戻る
        </Button>

        <Button
          color="primary"
          variant="contained"
          onClick={nextPage}
        >
          {getNextButton()}
        </Button>
        <Link href="/about"><a>aa</a></Link>
        </Grid>
      </Grid>
      {/* <ProgressBar>{getNextButton}</ProgressBar> */}
    </div>
  );
}
