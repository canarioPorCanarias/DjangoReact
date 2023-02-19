import React, { useState } from 'react'

export default function Messages() {
    const [Messages, setMessages] = useState(0)
    return (
        <div>
            <div className="text-center">No tienes mensages nuevos</div>
        </div>
    )
}
