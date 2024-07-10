# Note: Could make this read the recipes from the jar file
import os
path = "./ae2_inscriber_json"
gen_path = "./ae2_gen.js"
dir = os.listdir( path )


replace_recipe_function = """ 
    function replace_recipe(old_id, recipe) {
            event.custom(recipe).id(old_id)
    }
"""


def main():
    gen_file = open(gen_path, "w+")

    gen_file.write("ServerEvents.recipes(event => {")
    gen_file.write(replace_recipe_function + "\n")

    for filename in dir:
        print(filename)
        file_path  = "{0}/{1}".format(path,filename)
        file = open(file_path,"r")
        gen_file.write("\treplace_recipe(\"ae2:inscriber/{0}\",{1})\n".format(filename.replace(".json",""),file.read()))
        

    gen_file.write("\n})")

    gen_file.close();


if __name__ == "__main__":
    main()