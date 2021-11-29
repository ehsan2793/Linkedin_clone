import React from 'react'
import styled from 'styled-components'
const PostModal = (props) => {
    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a new post</h2>
                    <button>
                        <img
                            style={{ width: '25px', height: '25px' }}
                            src='/images/close-button.png'
                            alt=''
                        />
                    </button>
                </Header>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
`

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1 solid rgba(0, 0, 0 0.15);
  line-height: 1.5;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    img {
      pointer-events: none;
    }
  }
`
export default PostModal
