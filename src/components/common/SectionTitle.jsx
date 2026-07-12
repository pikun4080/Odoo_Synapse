function SectionTitle({ title, subtitle }) {
    return (
      <div className="mb-6">
  
        <h2 className="text-2xl font-bold">
          {title}
        </h2>
  
        <p className="text-slate-400">
          {subtitle}
        </p>
  
      </div>
    );
  }
  
  export default SectionTitle;