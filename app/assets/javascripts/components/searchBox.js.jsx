var SearchBox = React.createClass({
  getInitialState: function() {
    return { searchTerm: '' };
  },
  handleTextChange: function(e) {
    this.setState({searchTerm: e.target.value});
  },
  render: function() {
    var idioms = [{"Text":"A bitter pill","Meaning":"A situation or information that is unpleasant but must be accepted."},
{"Text":"A dime a dozen","Meaning":"Anything that is common, inexpensive, and easy to get or available any where."},
{"Text":"Ace in the hole","Meaning":"A hidden or secret strength, or unrevealed advantage."},
{"Text":"Achilles' heel","Meaning":"A metaphor for a fatal weakness in spite of overall strength."},
{"Text":"Actions speak louder than words","Meaning":"People's intentions can be judged better by what they do than by what they say."},
{"Text":"Add insult to injury","Meaning":"To further a loss with mockery or indignity; to worsen an unfavorable situation."},
{"Text":"All ears","Meaning":"Listening intently; fully focused or awaiting an explanation."},
{"Text":"All thumbs","Meaning":"Clumsy, awkward."},
{"Text":"An arm and a leg","Meaning":"Very expensive or costly. A large amount of money."},
{"Text":"Apple of discord","Meaning":"Anything causing trouble, discord, or jealousy."},
{"Text":"At the drop of a hat","Meaning":"Without any hesitation; instantly."},
{"Text":"Back to the drawing board","Meaning":"When an attempt fails, and it's time to start planning all over again."},
{"Text":"Ball is in your court","Meaning":"It is up to you to make the next decision or step."},
{"Text":"Barking up the wrong tree","Meaning":"Looking in the wrong place."},
{"Text":"Basket case","Meaning":"One made powerless or ineffective, as by nerves, panic, or stress."},
{"Text":"Beat around the bush","Meaning":"To treat a topic, but omit its main points, often intentionally or to delay or avoid talking about something difficult or unpleasant."},
{"Text":"Beat a dead horse","Meaning":"To uselessly dwell on a subject far beyond its point of resolution."},
{"Text":"Bed of roses","Meaning":"A rich person. A very rich family."},
{"Text":"Best of both worlds","Meaning":"A situation wherein someone has the privilege of enjoying two different opportunities."},
{"Text":"Bite off more than one can chew","Meaning":"To take on more responsibility than one can manage."},
{"Text":"Bite the bullet","Meaning":"To endure a painful or unpleasant situation that is unavoidable."},
{"Text":"Bite the dust","Meaning":"Euphemism for dying or death."},
{"Text":"Break a leg","Meaning":"A saying from the theatre that means good luck."},
{"Text":"Burn the midnight oil","Meaning":"To work late into the night, alluding to the time before electric lighting."},
{"Text":"Bust one's chops","Meaning":"To say things intended to harass."},
{"Text":"By the seat of one's pants","Meaning":"To achieve through instinct or do something without advance preparation."},
{"Text":"By the skin of one's teeth","Meaning":"Narrowly; barely. Usually used in regard to a narrow escape from a disaster."},
{"Text":"Call it a day","Meaning":"To declare the end of a task."},
{"Text":"Cat nap","Meaning":"A nap."},
{"Text":"Chalk up","Meaning":"To attribute something to a particular cause."},
{"Text":"Champ at the bit or Chomp at the bit","Meaning":"To show impatience or frustration when delayed."},
{"Text":"Chew the fat","Meaning":"To chat idly or generally waste time talking."},
{"Text":"Chink in one's armor","Meaning":"An area of vulnerability"},
{"Text":"Clam up","Meaning":"To become silent; to stop talking."},
{"Text":"Cold shoulder","Meaning":"To display aloofness and disdain."},
{"Text":"Couch potato","Meaning":"A lazy person."},
{"Text":"Crocodile tears","Meaning":"Fake tears or drama tears.(fake cry)"},
{"Text":"Cut a rug","Meaning":"To dance"},
{"Text":"Cut the cheese","Meaning":"To fart. Also cut the mustard"},
{"Text":"Cut the mustard","Meaning":"To perform well; to meet expectations.\nOr to fart."},
{"Text":"Don't have a cow ","Meaning":"Don't overreact."},
{"Text":"Drop a dime ","Meaning":"Make a telephone call; to be an informant."},
{"Text":"Elephant in the room","Meaning":"An obvious, pressing issue left unaddressed due to its sensitive nature."},
{"Text":"Fit as a fiddle","Meaning":"In good physical health."},
{"Text":"For a song","Meaning":"Almost free. Very cheap."},
{"Text":"From A to Z","Meaning":"Covering a complete range; comprehensively."},
{"Text":"From scratch / to make from scratch","Meaning":"Make from original ingredients; start from the beginning with no prior preparation"},
{"Text":"Get bent out of shape","Meaning":"To take offense; to get worked up, aggravated, or annoyed"},
{"Text":"Grasp the nettle","Meaning":"To tackle a difficulty boldly."},
{"Text":"Have a blast","Meaning":"To have a good time or to enjoy oneself."},
{"Text":"Have eyes in the back of one's head ","Meaning":"Someone can perceive things and events that are outside of their field of vision."},
{"Text":"Hit the road ","Meaning":"To leave."},
{"Text":"Hit the sack /sheets/hay","Meaning":"To go to bed to sleep."},
{"Text":"I bet","Meaning":"When you understand why someone has a particular opinion or feels a particular way; of course, indeed. May also be used sarcastically."},
{"Text":"Ignorance is bliss ","Meaning":"Life is good when you're naive to the hardships happening all around"},
{"Text":"Jump ship ","Meaning":"Leave a job, organization, or activity suddenly."},
{"Text":"Kick the bucket","Meaning":"Euphemism for dying or death."},
{"Text":"Let the cat out of the bag ","Meaning":"To reveal a secret."},
{"Text":"No horse in this race","Meaning":"No vested interest in the outcome of a particular contest or debate"},
{"Text":"Off one's rocker","Meaning":"Crazy, demented, out of one's mind, in a confused or befuddled state of mind, senile."},
{"Text":"Off one's trolley","Meaning":"Crazy, demented, out of one's mind, in a confused or befuddled state of mind, senile."},
{"Text":"Off the hook","Meaning":"To escape a situation of responsibility, obligation, or (less frequently) danger."},
{"Text":"Piss in one's cornflakes","Meaning":"To annoy, upset, or disappoint through spiteful or irresponsible behavior."},
{"Text":"Pop one's clogs (UK)","Meaning":"Euphemism for dying or death."},
{"Text":"Piece of cake ","Meaning":"A job, task or other activity that is pleasant – or, by extension, easy or simple."},
{"Text":"Pull somebody's leg","Meaning":"To tease or to joke by telling a lie."},
{"Text":"Pushing up daisies","Meaning":"Euphemism for dying or death."},
{"Text":"Put the cat among the pigeons","Meaning":"To create a disturbance and cause trouble."},
{"Text":"Raining cats and dogs","Meaning":"Raining really strong or hard."},
{"Text":"Right as rain","Meaning":"Needed, appropriate, essential, or hoped-for and has come to mean perfect, well, absolutely right."},
{"Text":"Screw the pooch","Meaning":"To screw up; to fail in dramatic and ignominious fashion."},
{"Text":"Shoot the breeze","Meaning":"To chat idly or generally waste time talking."},
{"Text":"Shooting fish in a barrel","Meaning":"Frivolously performing a simple task."},
{"Text":"Sleep with the fishes","Meaning":"Euphemism for dying or death."},
{"Text":"Spill the beans","Meaning":"Reveal someone's secret."},
{"Text":"Spin one's wheels","Meaning":"Expel much effort for little or no gain."},
{"Text":"Split the whistle","Meaning":"To arrive just on time."},
{"Text":"Sunny smile","Meaning":"Very happy."},
{"Text":"Take the biscuit (UK)","Meaning":"To be particularly bad, objectionable, or egregious."},
{"Text":"Take the cake (US)","Meaning":"To be especially good or outstanding."},
{"Text":"Throw under the bus","Meaning":"To betray or sacrifice someone for selfish reasons."},
{"Text":"Through thick and thin","Meaning":"In both good and bad times."},
{"Text":"Thumb one's nose","Meaning":"To express scorn or to disregard."},
{"Text":"Tie one on","Meaning":"To get drunk."},
{"Text":"To steal someone's thunder","Meaning":"To take credit for something someone else did."},
{"Text":"Trip the light fantastic","Meaning":"To dance"},
{"Text":"Under the weather","Meaning":"Feel sick or poorly"},
{"Text":"Whole nine yards","Meaning":"Everything. All of it."},
{"Text":"Wild goose chase","Meaning":"A frustrating or lengthy undertaking that accomplishes little."},
{"Text":"You bet","Meaning":"Equivalent of saying that's for sure or of course. May also be used sarcastically."},
{"Text":"X Marks the spot","Meaning":"When someone finds something they have been looking for."},
{"Text":"You can say that again","Meaning":"That is very true; expression of wholehearted agreement"}];
    var filterByTerm = function(term){
      var downcasedTerm = term.toLowerCase()
      return $.grep(idioms, function(idiom) {
        return ((idiom.Meaning.toLowerCase().indexOf(downcasedTerm) > -1) || (idiom.Text.toLowerCase().indexOf(downcasedTerm) > -1));
      });
    };
    
    var filteredIdioms = filterByTerm(this.state.searchTerm);;
    return (
      <div id="SearchBox">
        <input className="searchField" placeholder="Search for an idiom like 'Raining cats and dogs'" value={this.state.searchTerm} onChange={this.handleTextChange} />
        {
          filteredIdioms.map(function(idiom){
            return <Idiom text={idiom.Text} meaning={idiom.Meaning}/>;
          })
        }
      </div>
    );
  }

});