const Tag = ({ tags }) => {
   return (
      <ul className="tags">
         {tags.map((tag, index) => (
            <li key={`tag-${index}`}>{tag}</li>
         ))}
      </ul>
   );
};

export default Tag;
