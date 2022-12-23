import "./Board.css";
import "../Community.css";
import { PageFormat } from "../../../pageFormats";
import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * 전체공지
 */


export const Board = () => {
  // 게시판 글 저장
  const [boardlist, setBoardlist] = useState({boardList:[]});

  useEffect(()=>{
    axios.get("http://localhost:3001/board",{})// {} 빈 객체 전달
    //Server.js에 있는 result를 res가 전달 받음
    .then((res)=>{
      console.log(`res=> ${res}`);
      const { data } = res;
          console.log("data ==>", data);
          setBoardlist({
            // data를 boardList에 저장
            // 상태값이 바뀌면 리렌더링이 되면서 목록이 나타남
            boardList: data,
          });
    })
    .catch((e)=>{
      console.error(e);
    });
  },[]);//맨처음 렌더링될 때만 실행
  return(
    <PageFormat title="전체공지">
    <table id="board-list">
        <thead>
            <tr>
                <th>id</th>
                <th>division</th>
                <th>title</th>
                <th>writer</th>
                <th>created_at</th>
                <th>views</th>
                <th>file</th>
            </tr>
        </thead>
        <tbody>
            {boardlist.boardList.map((article)=>{
              return(
                <tr>
                  <td>{article.id}</td>
                  <td>{article.division}</td>
                  <td>{article.title}</td>
                  <td>{article.writer}</td>
                  <td>{article.created_at}</td>
                  <td>{article.views}</td>
                  <td>{article.isFile}</td>
              </tr>
              )
            })}
        </tbody>
    </table>
  </PageFormat>
  )
}
  

