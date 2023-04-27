import React, { useEffect } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const UserList = (props: any) => {
  const { user } = useTypedSelector(state => state.user)
  const { chats } = useTypedSelector(state => state.chat)
  const { fetchChatUsers } = useChatActions()

  useEffect(() => {
    fetchChatUsers(user[0].userId)
  }, [])

  function checkSelected(id: any) {
    const there = props.userList.filter((i: any) => i === id)
    return there.length
  }

  return (
    <div>
      {
        chats?.map((users: any) => {
          return users?.users?.map((us: any) => {
            if (us.receiver) {
              return <div>
                <p>{us?.receiver?.username}</p>
                <button onClick={() => {
                  if (checkSelected(us?.receiver?.userId) > 0) {
                    props.removeUser(us?.receiver?.userId)
                  } else {
                    props.addUsers(us?.receiver?.userId)
                  }
                }}>{checkSelected(us?.receiver?.userId) > 0 ? 'Added' : 'Add'}</button>
              </div>
            }
          })
        })
      }
    </div>
  )
};

export default UserList;
