const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

class TechSkillModel {
  constructor(name, imageSrc, experiencedFrom) {
    this.name = name;
    this.imageSrc = `${window.repoName}${imageSrc}`;
    this.experiencedFrom = experiencedFrom;
    this.formattedExperience = this._getFormattedExperience(this.experiencedFrom);
  }

  _getFormattedExperience(experiencedFrom) {
    let expInYears = currentYear - experiencedFrom;
    if (expInYears > 0) {
      return `${expInYears}+ years`;
    }

    return `${currentMonth}+ months`
  }
}

export default TechSkillModel;