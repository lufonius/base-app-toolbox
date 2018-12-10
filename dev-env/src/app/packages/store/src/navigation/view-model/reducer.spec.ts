import {BATGoToNextLevelAction, BATGoToPreviousLevelAction, BATViewModelInitAction} from "./actions";
import {BATDefaultNavItem} from "@base-app-toolbox/core";
import {batViewModelReducer, BATViewModelState} from "./reducer";

describe("BATViewModelReducer", () =>{

  let navItems: {[id: string]: BATDefaultNavItem};

  beforeEach(() => {
    navItems = {
    "1": {
      id: "1",
        route: "",
      title: "first",
      subtitle: "firstsubtitle",
      parentId: null,
      childrenIds: [ "3", "5" ]
    },
    "2": {
      id: "2",
        route: "",
      title: "second",
      subtitle: "secondsubtitle",
      parentId: null,
      childrenIds: [ "6" ]
    },
    "3": {
      id: "3",
        route: "",
      title: "third",
      subtitle: "thirdsubtitle",
      parentId: "1",
      childrenIds: [ "4" ]
    },
    "4": {
      id: "4",
        route: "",
      title: "fourth",
      subtitle: "fourthsubtitle",
      parentId: "3",
      childrenIds: []
    },
    "5":{
      id: "5",
        route: "",
      title: "fifth",
      subtitle: "fifthsubtitle",
      parentId: "1",
      childrenIds: []
    }
    };
  });

  it("should initially set up the viewmodel", () => {
    let action = new BATViewModelInitAction({ navItems });

    let initalState = {
      viewModel: {},
      currentLevel: 1
    };
    let initialViewModel = batViewModelReducer(initalState, action);

    expect(initialViewModel.currentLevel).toEqual(1);
    expect(initialViewModel.viewModel["1"].navItems.length).toEqual(2);
    expect(initialViewModel.viewModel["1"].navItems[0].id).toEqual("1");
    expect(initialViewModel.viewModel["1"].navItems[0].parentId).toEqual(null);
    expect(initialViewModel.viewModel["1"].navItems[1].parentId).toEqual(null);
  });

  it("should go to the next level", () => {
    let action = new BATGoToNextLevelAction({ navItems, navItem: navItems["1"], level: 1 });

    let initalState: BATViewModelState = {
      viewModel: { "1": {navItems: [navItems["1"], navItems["2"]], parentNavItem: null }},
      currentLevel: 1
    };

    let nextLevelViewModel = batViewModelReducer(initalState, action);

    expect(nextLevelViewModel.currentLevel).toEqual(2);
    expect(nextLevelViewModel.viewModel["2"]).toBeDefined();
    expect(nextLevelViewModel.viewModel["2"].navItems.length).toEqual(2);
    expect(nextLevelViewModel.viewModel["2"].navItems[1].id).toEqual("5");
  });

  it("should go to the previous level", () => {
    let action = new BATGoToPreviousLevelAction({ level: 2 });

    let initialState: BATViewModelState = {
      viewModel: {
        "1": { navItems: [navItems["1"], navItems["2"]], parentNavItem: null },
        "2": { navItems: [navItems["3"], navItems["5"]], parentNavItem: navItems["1"] }
        },
      currentLevel: 2
    };

    let previousLevelViewModel = batViewModelReducer(initialState, action);

    expect(previousLevelViewModel.currentLevel).toEqual(1);
    expect(previousLevelViewModel.viewModel["1"].navItems.length).toEqual(2);
    expect(previousLevelViewModel.viewModel["1"].navItems[0].id).toEqual("1");
    expect(previousLevelViewModel.viewModel["1"].navItems[0].parentId).toEqual(null);
    expect(previousLevelViewModel.viewModel["1"].navItems[1].parentId).toEqual(null);
  });
});
