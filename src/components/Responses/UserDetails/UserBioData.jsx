import ProfileImage from "./ProfileImage";
import PersonalDetails from "./PersonalDetails";
import AccountDetails from "./AccountDetails";
import LinkToAccount from "./LinkToAccount";

export default function UserBioData() {
   return (
    <div className="py-8 flex flex-col gap-4 items-center">
      <ProfileImage />
      <PersonalDetails />
      <AccountDetails />
      <LinkToAccount />
    </div>
  );
}
