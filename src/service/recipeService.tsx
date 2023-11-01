import { UUID } from "crypto";
import http from "../http-common";
import IRecipe from "../types/recipe";

const getRecipe = () => {
  return http.get<any>(`/recipe`);
};

const addRecipe = (data: IRecipe) => {
  return http.post<any>(`/recipe`, data);
};

const getRecipeById = (id: UUID) => {
  return http.get<any>(`/recipe/${id}`);
};

const deleteRecipe = (id: UUID) => {
  return http.delete<any>(`/recipe/${id}`);
};

const searchRecipe = (search_query: any) => {
  return http.get<any>(`/recipe/search?search_query=${search_query}`);
};

const recipeService = {
  getRecipe,
  addRecipe,
  deleteRecipe,
  getRecipeById,
  searchRecipe,
};

export default recipeService;
