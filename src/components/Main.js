import styled from 'styled-components'
import {FcPicture, FcVideoFile, FcList, FcCalendar} from "react-icons/fc";
import React from 'react'

const Main = (props) => {
    return <Container>
        <ShareBox>
            Share
            <div>
                <img src="/images/user.svg" alt=""/>
                <button>Start a post</button>
            </div>


            <div>


                <button>
                    <a><FcPicture/></a>
                    <span>Photo</span>
                </button>
                <button>
                    <a>
                        < FcVideoFile/>
                    </a>
                    <span>Video</span>
                </button>
                <button>
                    <a> <FcCalendar/></a>
                    <span>Event</span>
                </button>
                <button>
                    <a><FcList/></a>
                    <span>Write article</span>
                </button>

            </div>
        </ShareBox>
    </Container>
}

const Container = styled.div`
  grid-area: main;
`
const ShareBox = styled.div`
  padding-top: 5px;
  text-align: center;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      border: none;
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        a {
          font-size: 30px;
          margin: 0 4px 0 -2px;
        }

        span {
          color: #70b5f9;
        }

      }
    }
  }
`;


export default Main
