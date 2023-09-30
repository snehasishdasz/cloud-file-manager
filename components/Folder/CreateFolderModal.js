import React from 'react'

function CreateFolderModal() {
  return (
    <div>
        <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  )
}

export default CreateFolderModal