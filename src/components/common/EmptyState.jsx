function EmptyState({ text }) {
    return (
      <div className="bg-slate-800 rounded-xl p-12 text-center border border-slate-700">
  
        <h2 className="text-xl font-semibold">
          {text}
        </h2>
  
      </div>
    );
  }
  
  export default EmptyState;