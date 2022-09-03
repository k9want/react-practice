import React from 'react'

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid grey',
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    color: '#595959',
    fontSize: '16',
  },
}

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://yt3.ggpht.com/ytc/AMLnZu9xneUFTBrMzb_6Tl6IXrxUyfHoMAMw_t1q2MUA8lgXuA=s88-c-k-c0x00ffffff-no-rj"
          alt=""
          style={styles.image}
        />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  )
}

export default Comment
