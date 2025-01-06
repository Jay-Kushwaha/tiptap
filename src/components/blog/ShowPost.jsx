import parse from 'html-react-parser';

const ShowPost = ({ content }) => {
  return (
    <div>
      <div className='tiptap m-4 p-4 bg-gray-200'>
        {parse(content)}
      </div>
    </div>
  )
}

export default ShowPost
