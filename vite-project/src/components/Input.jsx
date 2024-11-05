export default function Input({ value, onChange }) {
    return (
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="bg-gray500 border-gray700 w-96 h-10 rounded-md custom-input px-4"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  