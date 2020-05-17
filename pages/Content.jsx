import React, {useContext} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Layout, {woop} from './Layout'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid';
// import Link from 'next/link'

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


export default function Content() {
  const value_list = useContext(woop);
  const index = value_list.index;
  const row = value_list.row[index];        //1行分のデータ
  const value_len = value_list.row.length;  //最大完了

  return (
    <Layout>
      <Grid 
        container 
        justify="center"
        spacing={2}>

        {/* タイトル */}
        <Grid item xs={8}>
          <Typography 
            variant="h4"
            align="center">
            {row.title}}
          </Typography>
        </Grid>
      </Grid>
    </Layout>
    );
}

// import Head from 'next/head'

// export default function Home() {
//   return (
//     <div className="container">
      
//     </div>
//   )
// }
