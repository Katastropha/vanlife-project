import { useState } from 'react'

const ModalComponent = ({
  children,
  onClose,
}: {
  children: React.ReactNode
  onClose: () => void
}) => {
  return (
    <div
      style={{
        backgroundColor: 'red',
      }}
    >
      <div onClick={onClose}>X</div>
      {children}
    </div>
  )
}

const DetailedViewComponent = ({ el }: { el: El }) => {
  return <div>this is the name: {el.name}</div>
}

interface El {
  name: string
}

export const TestContainer = () => {
  const [elements] = useState<El[]>([
    {
      name: 'one',
    },
    { name: 'two' },
  ])

  const [modal, setModal] = useState<{ el?: El }>({ el: undefined })

  return (
    <>
      {elements.map((el) => (
        <p onClick={() => setModal({ el })}>{el.name}</p>
      ))}
      {modal.el && (
        <ModalComponent onClose={() => setModal({ el: undefined })}>
          <DetailedViewComponent el={modal.el} />
        </ModalComponent>
      )}
    </>
  )
}
