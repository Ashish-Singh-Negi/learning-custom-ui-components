import { cva } from "class-variance-authority";

const badgeVariants = cva("rounded-md font-medium", {
  variants: {
    variant: {
      primary: "",
    },
  },
});

const Badge = () => {
  return <div>Badge</div>;
};
export default Badge;
